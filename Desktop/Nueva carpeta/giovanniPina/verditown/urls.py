from django.urls import path
from .views import index, nosotros, productos,mostrar,eliminar,modificar,crear,registrar,contacto

urlpatterns=[ 
    path('', index, name="index"),
    path('nosotros/',nosotros, name="nosotros"), 
    path('productos/', productos, name="productos"),
    path('crear/', crear, name="crear"),
    path('eliminar/<id>/', eliminar, name='eliminar'),
    path('modificar/<id>', modificar, name="modificar"),
    path('mostrar/', mostrar, name="mostrar"),
    path('registrar/', registrar, name="registrar"),
    path('contacto/', contacto, name="contacto"),
] 