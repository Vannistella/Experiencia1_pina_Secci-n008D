from django import forms
from django.forms import ModelForm
from django.forms import widgets
from django.forms.models import ModelChoiceField
from .models import Producto
from .models import Categoria, Producto
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class RegistroUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password1', 'password2']


class ProductoForm(forms.ModelForm):
    class Meta:
        model = Producto                #nombre de la clase
        fields = ['sku', 'nombre', 'descrip', 'categoria', 'imagen','precio','stock'] #atributos de la clase
        labels = {                     #etiquetas asociadas a los atributos
            'sku': 'Sku',
            'marca' : 'Marca',
            'modelo' : 'Modelo',
            'categoria': 'Categoria',
            'imagen':'Imagen',
            'precio':'precio',
            'stock':'stock'
        }
        widgets = {
            'sku' : forms.TextInput(
                attrs={
                    'class':'form-control',
                    'placeholder': 'Ingrese sku..',
                    'id':'sku',
                }
            ),
            'nombre': forms.TextInput(
                attrs={
                    'class':'form-control',
                    'placeholder':'Ingrese nombre..',
                    'id':'nombre',
                }
            ),
            'descrip': forms.TextInput(
                attrs={
                    'class':'form-control',
                    'placeholder':'Ingrese descripcion..',
                    'id':'descrip',
                }
            ),
            'categoria':forms.Select(
                attrs={
                    'class':'form-control',
                    'id':'categoria',
                }
            ),
            'imagen': forms.FileInput(
                attrs={
                    'class':'form-control',
                    'id':'imagen',
                }
            ),
            'precio': forms.TextInput(
                attrs={
                    'class':'form-control',
                    'placeholder':'Ingrese Precio..',
                    'id':'precio',
                }
            ),
            'stock': forms.TextInput(
                attrs={
                    'class':'form-control',
                    'placeholder':'Ingrese Stock..',
                    'id':'stock',
                }
            ),

        }#cierre de widgets
