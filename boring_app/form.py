from django import forms
from .models import ProImage, BackImage, StatusImage

class ImageForm(forms.ModelForm):
    class Meta:
        model=ProImage
        fields=('image',)

class BackForm(forms.ModelForm):
    class Meta:
        model=BackImage
        fields=('image',)

class PostImageForm(forms.ModelForm):
    class Meta:
        model=StatusImage
        fields=('image',)