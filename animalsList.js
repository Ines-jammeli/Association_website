
var dogsList=[
{name: "Miloud", breed: "Tunisian dog", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBYXY3HkjTtNYJXQ6Kg7oxHotEzY1FmmJZQ&usqp=CAU", id: "Miloud_img", alt: "Miloud", age:2 },
{name: "Fanta", breed: "Tunisian dog",src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_ay4-_Fhaw6NmCL4-M0P5sohreTIlLKoOg&usqp=CAU", id: "Fanta_img", alt: "Fanta", age:3  },
{name: "boby", breed: "Berger allemand",src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQschexxWS-_dwufrLngkEPKOK8-UnUU8JS0w&usqp=CAU", id: "boby_img", alt: "boby", age:5 },
{name: "Louisa", breed: "Tunisian dog",src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpQQYrojBqg4QJ8WlkfvscTqMdHfH4GH-Cg&usqp=CAU", id: "Louisa_img", alt: "Louisa", age:1  }
]

var catsList=[
{name: "Michou", breed: "Tunisian cat",src: "https://img.huffingtonpost.com/asset/5d02bb9c2400008c17907df3.jpeg?ops=scalefit_720_noupscale&format=webp", id: "Michou_img", alt: "Michou", age:0.5  },
{name: "Bichou", breed: "Tunisian cat",src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfYIQWCtDnPpuEJA5trlxEFHoW9GaNCjbxwg&usqp=CAU", id: "Bichou_img", alt: "Bichou", age:0.4  },
{name: "jarjoum", breed: "Tunisian cat",src: "https://farm5.static.flickr.com/4856/46828271741_f8fd486114.jpg", id: "jarjoum_img", alt: "jarjoum", age:1  },
{name: "falfoula", breed: "Tunisian cat",src: "https://st3.depositphotos.com/35165130/37747/i/450/depositphotos_377474434-stock-photo-cats-tunisia-sousse-medina-tunisia.jpg", id: "falfoula_img", alt: "falfoula", age:2  }
]
/**
function existingDogs(){
$("div#change").empty();

    for (i=0;i<dogsList.length;i++){
	    $("div#change").append("<a href=\"app_form.html\"> <div class=\"gallery\"> <img src=\""+dogsList[i].src +" id=\""+ dogsList[i].id+ "alt=\""+dogsList[i].name+ "width=\"300\" height=\"200\">")
	    $("div#change").append("<h3 name=\""+ dogsList[i].name +"\">"+ dogsList[i].name +"</h3>")
  		$("div#change").append("<p>"+ dogsList[i].age+ "year(s) old </p> </div> </a>")
    }
}


function existingCats(){
$("div#change").empty(); 

    for (i=0;i<catsList.length;i++){
	    $("div#change").append("<a href=\"app_form.html\"> <div class=\"gallery\"> <img src=\""+catsList[i].src +"id=\""+ catsList[i].id+ "alt=\""+catsList[i].name+ "width=\"300\" height=\"200\">")
	    $("div#change").append("<h3 name=\""+ catsList[i].name +"\">"+ catsList[i].name +"</h3>")
  		$("div#change").append("<p>"+ catsList[i].age+ "year(s) old </p> </div> </a>")
    }
}
**/

var contactList=[{Name: 'Houda Bergaoui', email: 'houda@gmail.com', tel:'52 194 155'},
{Name: 'Souhayla Rhouma', email: 'souhayla@gmail.com', tel:'98 879 155'},
{Name: 'Saif Hamidi', email: 'saif@gmail.com', tel:'21 155 692'},
{Name: 'Cyrine Gharbi', email: 'cyrine@gmail.com', tel:'50 751 687'},
{Name: 'Rime Essid', email: 'rime@gmail.com', tel:'98 751 752'},
{Name: 'Khaoula Blel', email: 'Khaoula@gmail.com', tel:'22 453 685'},
{Name: 'Eya Meddeb', email: 'eya@gmail.com', tel:'22 111 412'}
]


if (localStorage.page==="file:///C:/Users/Ines/Desktop/git/Association_website/dog.html"){
   for (var i=0;i<dogsList.length;i++){
    if (localStorage.src===dogsList[i].src){
      dogsList.splice(i,1);
    }
   }}
   else if (localStorage.page==="file:///C:/Users/Ines/Desktop/git/Association_website/cat.html"){
    for (var i=0;i<catsList.length;i++){
    if (localStorage.src===catsList[i].src){
      catsList.splice(i,1);
    }
   }
  
  // localStorage.clear()
 }
   