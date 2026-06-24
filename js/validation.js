var menuItems = {
    bread: [
        { value: "sourdough", text: "Sourdough Loaf - 1500/="},
        { value: "baguette", text: "Baguette - 400/="},
        { value: "banana-bread", text: "Banana Bread - 600/="}
             ],
             cakes: [
                { value: "red-velvet", text: "Red Velvet Cake - 300/="},
                { value: "black-forest", text: "Black Forest Cake- 350/="},
                { value: "carrot-cake", text: "Carrot Cake - 300/="},
                { value: "lemon-cake", text: "Lemon Cake - 300/="},
                { value: "vanilla-cake", text: "Vanilla Cake - 200/="}
             ],
             pastries: [
                {values: "croissant", text: "Butter Croissant - 300/="},
                {values: "cinnamon", text: "Cinnamon - 280/="},
                {values: "apple-pie", text: "Apple pie - 700/="},
                {values: "eclair", text: "Caramel Eclair - 750/="}
                 ],
                 desserts: [
                    {values: "tiramisu", text: "Tiramisu - 550/="},
                    {values: "creme-brulee", text: "Creme Brulee- 500/="},
                    {values: "lava-cake", text: "Chocolate Lava Cake - 400/="},
                    {values: "banana-splie", text: "Banana Split Icecream - 700/="},
                 ]

};

var categorySelect = document.getElementById('category');
var itemSelect = document.getElementById('item');

if (categorySelect) {
    categorySelect.addEventListener('change', function() {
        var selected = this.value;
        
        itemSelect.innerHTML = '<option value="">--Select an item--</option>';
        
        if (selected && menuItems[selected]) {
            menuItems[selected].forEach(function(item) {
                var option = document.createElement('option');
                option.value = item.value;
                option.text = item.text;
                itemSelect.appendChild(option);
            });
        }
    });
}