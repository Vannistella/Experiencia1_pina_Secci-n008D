from django.shortcuts import render, redirect
from .models import *
from .forms import ProductoForm, RegistroUserForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from verditown.compra import Carrito
from django.db import transaction

# Create your views here.

def index(request):
    return render(request, 'index.html')

def contacto(request):
    return render(request, 'contacto.html')

@login_required
def mostrar(request):
    productos = Producto.objects.all()
    datos={
        'cositas':productos
    }
    return render(request,'mostrar.html',datos)

@login_required
def crear(request):
    if request.method=='POST':
        productoForm = ProductoForm(request.POST, request.FILES)
        if productoForm.is_valid():
            productoForm.save()     #similar al insert en función
            return redirect('mostrar')
    else:
        productoForm=ProductoForm()
    return render(request, 'crear.html',{'productoForm': ProductoForm})

@login_required
def eliminar(request,id):
    ProductoEliminado=Producto.objects.get(sku=id)  #obtenemos un objeto por su pk
    ProductoEliminado.delete()
    return redirect('mostrar')


@login_required
def modificar(request,id):
    animal = Producto.objects.get(sku=id)         #obtenemos un objeto por su pk
    datos ={
        'form':ProductoForm(instance=animal)
    }
    if request.method=='POST':
        formulario = ProductoForm(data=request.POST, instance=animal, files=request.FILES)
        if formulario.is_valid:
            formulario.save()
            return redirect ('mostrar')
    return render(request, 'modificar.html', datos)



#método que permite registrar un usuario
def registrar(request):
    data = {
        'form' : RegistroUserForm()         #creamos un objeto de tipo forms para user
    }
    if request.method=="POST":
        formulario = RegistroUserForm(data = request.POST)  
        if formulario.is_valid():
            formulario.save()
            user= authenticate(username=formulario.cleaned_data["username"],
                password=formulario.cleaned_data["password1"])
            login(request,user)   
            return redirect('index')
        data["form"] = formulario
    return render(request, 'registration/registro.html', data)

def nosotros(request):
    return render(request, 'nosotros.html')

def productos(request):
    productos = Producto.objects.all()
    datos={
        'cositas':productos
    }
    return render(request,'productos.html',datos)


def tienda(request):
    productos = Producto.objects.all()
    datos={
        'cositas':productos
    }
    return render(request, 'tienda.html', datos)

def agregar_producto(request,id):
    carrito_compra= Carrito(request)
    producto = Producto.objects.get(sku=id)
    carrito_compra.agregar(producto=producto)
    return redirect('tienda')

def eliminar_producto(request, id):
    carrito_compra= Carrito(request)
    producto = Producto.objects.get(sku=id)
    carrito_compra.eliminar(producto=producto)
    return redirect('tienda')

def restar_producto(request, id):
    carrito_compra= Carrito(request)
    producto = Producto.objects.get(sku=id)
    carrito_compra.restar(producto=producto)
    return redirect('tienda')

def limpiar_carrito(request):
    carrito_compra= Carrito(request)
    carrito_compra.limpiar()
    return redirect('tienda')    


def generarBoleta(request):
    precio_total=0
    for key, value in request.session['carrito'].items():
        precio_total = precio_total + int(value['precio']) * int(value['cantidad'])
    boleta = Boleta(total = precio_total)
    boleta.save()
    productos = []
    for key, value in request.session['carrito'].items():
            producto = Producto.objects.get(sku = value['producto_sku'])
            cant = value['cantidad']
            subtotal = cant * int(value['precio'])
            detalle = detalle_boleta(id_boleta = boleta, id_producto = producto, cantidad = cant, subtotal = subtotal)
            detalle.save()
            productos.append(detalle)
    datos={
        'productos':productos,
        'fecha':boleta.fechaCompra,
        'total': boleta.total
    }
    request.session['boleta'] = boleta.id_boleta
    carrito = Carrito(request)
    carrito.limpiar()
    return render(request, 'detallecarrito.html',datos)


def aceptarBoleta(request):
    boleta_id = request.session.get('boleta')
    if boleta_id:
        try:
            with transaction.atomic():
                boleta = Boleta.objects.select_for_update().get(id_boleta=boleta_id)
                for detalle in boleta.detalle_boleta_set.all():
                    producto = detalle.id_producto
                    cant = detalle.cantidad

                    if producto.stock >= cant:
                        producto.stock -= cant
                        producto.save()
                    else:
                        # Manejar la falta de stock
                        mensaje_error = f"No hay suficiente stock para el producto '{producto.nombre}'."
                        

                # Marcar la boleta como aceptada (si es necesario)
                boleta.aceptada = True
                boleta.save()

                # Restablecer la sesión del carrito y la boleta
                carrito = Carrito(request)
                carrito.limpiar()
                del request.session['boleta']

        except Boleta.DoesNotExist:
            # Manejar la boleta no encontrada
            mensaje_error = "La boleta no existe."
            

    return redirect('tienda')