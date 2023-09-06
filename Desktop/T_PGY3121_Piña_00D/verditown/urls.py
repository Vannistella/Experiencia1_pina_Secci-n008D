from django.urls import path
from .views import *

urlpatterns=[ 
    path('', index, name="index"),
    path('mostrar/', mostrar, name="mostrar"),        
    path('crear/', crear, name="crear"),
    path('eliminar/<id>/', eliminar, name='eliminar'),
    path('modificar/<id>', modificar, name="modificar"),
    path('nosotros/',nosotros, name="nosotros"),
    path('productos/', productos, name="productos"),
    path('registrar/', registrar, name="registrar"),
    path('contacto/', contacto, name="contacto"),

    path('tienda/',tienda, name="tienda"),
    path('tienda/',tienda, name="tienda"),    
    path('generarBoleta/', generarBoleta,name="generarBoleta"),
    path('agregar/<id>', agregar_producto, name="agregar"),
    path('eliminar/<id>', eliminar_producto, name="eliminar"),
    path('restar/<id>', restar_producto, name="restar"),
    path('limpiar/', limpiar_carrito, name="limpiar"),
    path('aceptar-boleta/', aceptarBoleta, name='aceptar_boleta'),

    
]