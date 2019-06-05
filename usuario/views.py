from django.shortcuts import render, redirect
from django.core.files.storage import FileSystemStorage

# Create your views here.
def index(request):
    if request.method == 'POST':
        if 'imagem_retina' in request.FILES:
            myfile = request.FILES['imagem_retina']
            fs = FileSystemStorage()
            filename = fs.save(myfile.name, myfile)
            print(filename)
            path = 'media/'+filename
            return render(request, 'usuario/index.html', {'imagem': 1, 'resultado': 1, 'diagnostico': 'NÃO HÁ EXSUDATOS', 'url_imagem': path, 'image_name': myfile})
        else:
            return render(request, 'usuario/index.html', {'imagem': 1, 'resultado': 1, 'diagnostico': 'NÃO HÁ EXSUDATOS'})
    elif request.method == 'GET':
        return render(request, 'usuario/index.html', {'imagem': 1, 'resultado': 1, 'diagnostico': 'NÃO HÁ EXSUDATOS'})
    else:
        return render(request, 'usuario/index.html', {'imagem': 1, 'resultado': 1, 'diagnostico': 'NÃO HÁ EXSUDATOS'})