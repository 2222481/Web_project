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
// ---- SHOW/HIDE DELIVERY ADDRESS ----
var deliveryRadio = document.getElementById('delivery');
var pickupRadio = document.getElementById('pickup');
var addressGroup = document.getElementById('addressGroup');

if (addressGroup) {
    addressGroup.style.display = 'none';
}

if (deliveryRadio) {
    deliveryRadio.addEventListener('change', function() {
        if (this.checked) {
            addressGroup.style.display = 'block';
        }
    });
}

if (pickupRadio) {
    pickupRadio.addEventListener('change', function() {
        if (this.checked) {
            addressGroup.style.display = 'none';
        }
    });
}
// ---- SIGNIN FORM VALIDATION ----
var signinForm = document.getElementById('signinForm');
if (signinForm) {
    signinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();

        if (!email) {
            alert('Please enter your email address');
            return;
        }
        if (!password) {
            alert('Please enter your password');
            return;
        }
        if (password.length < 6) {
            alert('Password must be at least 6 characters');
            return;
        }
        alert('Sign in successful! Welcome back!');
        signinForm.reset();
    });
}

// ---- SIGNUP FORM VALIDATION ----
var signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var fullname = document.getElementById('fullname').value.trim();
        var email = document.getElementById('email').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var password = document.getElementById('password').value.trim();
        var confirmPassword = document.getElementById('confirmPassword').value.trim();
        var terms = document.getElementById('terms').checked;

        if (!fullname) {
            alert('Please enter your full name');
            return;
        }
        if (!email) {
            alert('Please enter your email address');
            return;
        }
        if (!phone) {
            alert('Please enter your phone number');
            return;
        }
        if (!password) {
            alert('Please enter a password');
            return;
        }
        if (password.length < 6) {
            alert('Password must be at least 6 characters');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        if (!terms) {
            alert('Please agree to the Terms and Conditions');
            return;
        }
        alert('Account created successfully! Welcome to Valentine\'s Cake Bakery!');
        signupForm.reset();
    });
}

