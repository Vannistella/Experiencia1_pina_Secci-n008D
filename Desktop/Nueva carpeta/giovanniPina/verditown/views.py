from django.shortcuts import render, redirect
from .models import *
from .forms import ProductoForm, RegistroUserForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login

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