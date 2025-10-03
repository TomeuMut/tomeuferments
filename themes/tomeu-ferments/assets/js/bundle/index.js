import clickOutside from "./modules/clickOutside";
import svg from "./modules/svg";
import nav from "./modules/nav";
import mobileMenu from "./modules/mobileMenu";
import toggleClass from "./modules/toggleClass";
import cursor from "./modules/cursor";
import slider from "./modules/slider";
import carousel from "./modules/carousel";
import scrollTo from "./modules/scrollTo";
import sal from "sal.js";
import inputFile from "./modules/inputFile";
var jquery = require("jquery");
window.$ =  jquery;

clickOutside('is-active')
nav()
svg()
slider()
sal()
mobileMenu()
toggleClass()
cursor()
scrollTo()
inputFile()
carousel('.swiper-banner','2', '1', 16, 0, '','','','',false,false,0,false,'fade',2000,false)
carousel('.swiper-hero','2', '1', 16, 0, '','','','',false,false,0,false)
carousel('.swiper-logos','1', '1', 0, 0, '','','','',true,false,0,false,'fade',2500,false)
carousel('.swiper-press','1', '1', 0, 0, '','','','',true,false,0,false)
carousel('.swiper-slider','2', '1', 16, 0, '','','','',false,false,0,false)
carousel('.swiper-product','4', '1', 16, 0, '','','','',false,false,0,false)




$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault(); // Previene el comportamiento por defecto del enlace

        var target = this.hash; // Obtiene el hash (id del destino)
        var $target = $(target);

        $('html, body').stop().animate({
            scrollTop: $target.offset().top
        }, 800, 'swing'); // 800 milisegundos para el desplazamiento suave
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const pageTitle = document.title.trim();

  document.querySelectorAll("img").forEach(img => {
    // Si el alt no existe o está vacío
    if (!img.hasAttribute("alt") || img.getAttribute("alt").trim() === "") {
      let src = img.getAttribute("src") || "";

      // Extraer el nombre del archivo sin extensión
      let fileName = src.split("/").pop().split(".")[0];

      // Limpiar el nombre (quitar guiones, guiones bajos y números)
      fileName = fileName.replace(/[-_]+/g, " ").replace(/\d+/g, "").trim();

      // Capitalizar primera letra
      fileName = fileName.charAt(0).toUpperCase() + fileName.slice(1);

      // Si sigue vacío, poner algo genérico
      if (!fileName) fileName = "Imagen del sitio";

      // Crear el alt final
      const altText = `${pageTitle} - ${fileName}`;
      img.setAttribute("alt", altText);

      console.log(`ALT añadido: "${altText}" a -> ${src}`);
    }
  });
});
