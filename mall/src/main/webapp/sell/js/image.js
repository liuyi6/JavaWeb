function PreviewImage(imgFile)
{
    var filextension=imgFile.value.substring(imgFile.value.lastIndexOf("."),imgFile.value.length);
    filextension=filextension.toLowerCase();
    if ((filextension!='.jpg')&&(filextension!='.gif')&&(filextension!='.jpeg')&&(filextension!='.png')&&(filextension!='.bmp'))
    {
    alert("对不起，系统仅支持标准格式的照片，请您调整格式后重新上传，谢谢 !");
    imgFile.focus();
    }
    else
    {
    var path;

    if(document.all)//IE
    {
    imgFile.select();
    path = document.selection.createRange().text;
  
    document.getElementById("imgPreview").innerHTML="";
    document.getElementById("imgPreview").style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='scale',src=\"" + path + "\")";//使用滤镜效果 
    }
    else//FF
    {
    path = window.URL.createObjectURL(imgFile.files[0]);
    document.getElementById("imgPreview").innerHTML = "<img id='img1' width='120px' height='100px' src='"+path+"'/>";
    // document.getElementById("img1").src = path;
    }
    }
}

function PreviewImage1(imgFile)
{
    var filextension=imgFile.value.substring(imgFile.value.lastIndexOf("."),imgFile.value.length);
    filextension=filextension.toLowerCase();
    if ((filextension!='.jpg')&&(filextension!='.gif')&&(filextension!='.jpeg')&&(filextension!='.png')&&(filextension!='.bmp'))
    {
    alert("对不起，系统仅支持标准格式的照片，请您调整格式后重新上传，谢谢 !");
    imgFile.focus();
    }
    else
    {
    var path;

    if(document.all)//IE
    {
    imgFile.select();
    path = document.selection.createRange().text;
  
    document.getElementById("imgPreview1").innerHTML="";
    document.getElementById("imgPreview1").style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='scale',src=\"" + path + "\")";//使用滤镜效果 
    }
    else//FF
    {
    path = window.URL.createObjectURL(imgFile.files[0]);
    document.getElementById("imgPreview1").innerHTML = "<img id='img1' width='auto' height='100%' style='margin:0px auto;display:block' src='"+path+"'/>";
    // document.getElementById("img1").src = path;
    }
    }
}

function PreviewImage2(imgFile)
{
    var filextension=imgFile.value.substring(imgFile.value.lastIndexOf("."),imgFile.value.length);
    filextension=filextension.toLowerCase();
    if ((filextension!='.jpg')&&(filextension!='.gif')&&(filextension!='.jpeg')&&(filextension!='.png')&&(filextension!='.bmp'))
    {
    alert("对不起，系统仅支持标准格式的照片，请您调整格式后重新上传，谢谢 !");
    imgFile.focus();
    }
    else
    {
    var path;

    if(document.all)//IE
    {
    imgFile.select();
    path = document.selection.createRange().text;
  
    document.getElementById("imgPreview2").innerHTML="";
    document.getElementById("imgPreview2").style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='scale',src=\"" + path + "\")";//使用滤镜效果 
    }
    else//FF
    {
    path = window.URL.createObjectURL(imgFile.files[0]);
    document.getElementById("imgPreview2").innerHTML = "<img id='img2' width='auto' height='100%' style='margin:0px auto;display:block' src='"+path+"'/>";
    // document.getElementById("img1").src = path;
    }
    }
}

function PreviewImage3(imgFile)
{
    var filextension=imgFile.value.substring(imgFile.value.lastIndexOf("."),imgFile.value.length);
    filextension=filextension.toLowerCase();
    if ((filextension!='.jpg')&&(filextension!='.gif')&&(filextension!='.jpeg')&&(filextension!='.png')&&(filextension!='.bmp'))
    {
    alert("对不起，系统仅支持标准格式的照片，请您调整格式后重新上传，谢谢 !");
    imgFile.focus();
    }
    else
    {
    var path;

    if(document.all)//IE
    {
    imgFile.select();
    path = document.selection.createRange().text;
  
    document.getElementById("imgPreview3").innerHTML="";
    document.getElementById("imgPreview3").style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='scale',src=\"" + path + "\")";//使用滤镜效果 
    }
    else//FF
    {
    path = window.URL.createObjectURL(imgFile.files[0]);
    document.getElementById("imgPreview3").innerHTML = "<img id='img3' width='auto' height='100%' style='margin:0px auto;display:block' src='"+path+"'/>";
    // document.getElementById("img1").src = path;
    }
    }
}