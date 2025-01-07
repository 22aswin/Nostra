var div=document.getElementById("div")
var x=document.getElementById("x")
x.addEventListener("click",function(){
    div.remove()
})







var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

  menuicon.addEventListener("click",function(){
    sidenav.style.left=0
  })


  closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
  })







const checkboxes = document.querySelectorAll('input[name="check"]');
    const searchInput = document.getElementById("search");
    const products = document.querySelectorAll('.shirt');  

    let selectedFilters = {
        occasion: [],
        color: [],
        arrival: []
    };

  
    function filterProducts() {
        const searchValue = searchInput.value.toLowerCase();

        products.forEach((product) => {
            let matchesFilters = true;

          
            for (let filterType in selectedFilters) {
                const filterValues = selectedFilters[filterType];
                const productValue = product.getAttribute(`data-${filterType}`).toLowerCase();

                if (filterValues.length > 0 && !filterValues.includes(productValue)) {
                    matchesFilters = false;
                    break;  
                }
            }

           
            if (matchesFilters && product.textContent.toLowerCase().includes(searchValue)) {
                product.classList.remove('hidden');  
            } else {
                product.classList.add('hidden');   
            }
        });
    }

    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
        
            const category = checkbox.value.toLowerCase();
            const type = getCategoryType(category);  

            if (checkbox.checked) {
                selectedFilters[type].push(category);  
            } else {
                const index = selectedFilters[type].indexOf(category);
                if (index > -1) {
                    selectedFilters[type].splice(index, 1);  
                }
            }

            filterProducts();  
        });
    });

    
    searchInput.addEventListener("input", () => {
        filterProducts();  
    });

    
    function getCategoryType(value) {
        if (["summer", "beach", "party"].includes(value)) {
            return "occasion";
        } else if (["red", "blue", "black", "white", "green"].includes(value)) {
            return "color";
        } else if (["new", "old"].includes(value)) {
            return "arrival";
        }
        return "";
    }

    const promo = document.getElementById("promo");
    const closebutton = document.getElementById("closebutton");
    closebutton.addEventListener("click", function() {
        promo.style.display = "none";
    });



///some

