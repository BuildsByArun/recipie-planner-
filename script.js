const RECIPE_KEY = 'mealmagic_recipes';
const PLANNER_KEY = 'mealmagic_planner';

const mockRecipes = [
  {
    id: '1',
    name: "Veggie Stir-Fry",
    category: "Vegan",
    calories: 320,
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2025/02/stir-fry.jpg",
    ingredients: ["Broccoli", "Bell Pepper", "Tofu", "Soy Sauce", "Ginger"],
    instructions: "Chop veggies and tofu. Stir-fry in hot pan with sauce until crisp-tender.",
    macros: {carbs: 40, proteins: 18, fats: 10}
  },
  {
    id: '2',
    name: "Banana Pancakes",
    category: "Dessert",
    calories: 370,
    img: "https://feelgoodfoodie.net/wp-content/uploads/2022/05/Banana-Pancakes-08.jpg",
    ingredients: ["Banana", "Eggs", "Flour", "Milk", "Maple Syrup"],
    instructions: "Mix ingredients. Cook on griddle until golden. Serve with syrup.",
    macros: {carbs: 60, proteins: 8, fats: 9}
  },
  {
    id: '3',
    name: "Grilled Cheese",
    category: "Quick",
    calories: 410,
    img: "https://www.allrecipes.com/thmb/CZ93z2oGv0n9ZsLp5yE2Lgb0Tyk=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-238891-Grilled-Cheese-Sandwich-beauty-4x3-362f705972e64a948b7ec547f7b2a831.jpg",
    ingredients: ["Bread", "Cheddar Cheese", "Butter"],
    instructions: "Butter bread, add cheese, grill until golden.",
    macros: {carbs: 28, proteins: 14, fats: 20}
  },
  {
    id: '4',
    name: "Fruit Salad",
    category: "Vegan",
    calories: 180,
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2025/06/fruit-salad-recipe.jpg",
    ingredients: ["Apple", "Banana", "Orange", "Grapes", "Mint"],
    instructions: "Chop fruits, toss with mint, serve chilled.",
    macros: {carbs: 42, proteins: 2, fats: 0}
  },
  {
    id: '5',
    name: "Chicken Wrap",
    category: "Quick",
    calories: 480,
    img: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Wrap.jpg",
    ingredients: ["Chicken Breast", "Tortilla", "Lettuce", "Tomato", "Mayonnaise"],
    instructions: "Cook chicken, fill tortilla with veggies and chicken, wrap and serve.",
    macros: {carbs: 38, proteins: 34, fats: 18}
  },
  {
    id: '6',
    name: "Avocado Toast",
    category: "Vegan",
    calories: 270,
    img: "https://www.dinneratthezoo.com/wp-content/uploads/2018/12/avocado-toast-14.jpg",
    ingredients: ["Bread", "Avocado", "Salt", "Pepper", "Lemon Juice"],
    instructions: "Toast bread, mash avocado, season, spread, serve.",
    macros: {carbs: 24, proteins: 4, fats: 16}
  },
  {
    id: '7',
    name: "Chocolate Mousse",
    category: "Dessert",
    calories: 390,
    img: "https://www.allrecipes.com/thmb/BVIa5dKfGQlpQJ_epc6wH6Vm990=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/IMG_8145_Chocolate-Mousse-for-Beginners-4x3-cropped-757ae43035ff48cc8bc9ccffbd6cf3b7.jpg",
    ingredients: ["Chocolate", "Cream", "Sugar", "Eggs"],
    instructions: "Melt chocolate, whip cream, fold together, chill.",
    macros: {carbs: 43, proteins: 6, fats: 22}
  },
  {
    id: '8',
    name: "Egg Fried Rice",
    category: "Quick",
    calories: 420,
    img: "https://www.seriouseats.com/thmb/zO80j7KGl3j2k3vgrNVahBWUQBk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20230529-SEA-EggFriedRice-AmandaSuarez-hero-c8d95fbf69314b318bc279159f582882.jpg",
    ingredients: ["Rice", "Eggs", "Peas", "Carrots", "Soy Sauce"],
    instructions: "Cook rice, scramble eggs, stir-fry with veggies and sauce.",
    macros: {carbs: 56, proteins: 14, fats: 11}
  },
  {
    id: '9',
    name: "Gulab Jamun",
    category: "Dessert",
    calories: 340,
    img: "https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2016/10/gulab-jamun-using-mix.jpg?w=1200&ssl=1",
    ingredients: [ "1 cup milk powder (full-fat)",
    "1/4 cup all-purpose flour (maida)",
    "1/4 tsp baking soda",
    "2 tbsp ghee",
    "2–3 tbsp milk (as needed for kneading)",
    "Oil or ghee for frying",
    "1½ cups sugar",
    "1½ cups water",
    "4–5 green cardamom pods",
    "Few drops rose water or ½ tsp rose essence",
    "Few saffron strands (optional)"],
    instructions:  "Prepare sugar syrup by boiling sugar, water, cardamom, and rose water until slightly sticky. Mix milk powder, maida, baking soda, and ghee. Add milk to form a soft dough and rest 10 minutes. Shape into smooth balls, fry on low heat until golden brown, and soak in warm syrup for 2 hours. Serve warm or chilled.",
  macros: { carbs: 55, proteins: 6, fats: 14}
  },
  {
    id: '10',
    name: "Quinoa Bowl",
    category: "Vegan",
    calories: 310,
    img: "https://www.emilieeats.com/wp-content/uploads/2016/09/greek-quinoa-buddha-bowl-vegan-gluten-free-1-1536x2304.jpg",
    ingredients: ["Quinoa", "Black Beans", "Corn", "Tomato", "Avocado"],
    instructions: "Cook quinoa, mix all ingredients, season, serve.",
    macros: {carbs: 46, proteins: 10, fats: 7}
  }
];

// Utility
function getRecipes() {
  let data = localStorage.getItem(RECIPE_KEY);
  if (!data) {
    localStorage.setItem(RECIPE_KEY, JSON.stringify(mockRecipes));
    return [...mockRecipes];
  }
  return JSON.parse(data);
}
function saveRecipes(arr) {
  localStorage.setItem(RECIPE_KEY, JSON.stringify(arr));
}
function getPlanner() {
  let data = localStorage.getItem(PLANNER_KEY);
  if (!data) {
    // Create empty week plan: {Monday: [], ...}
    let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let plan = {};
    days.forEach(d => plan[d]=[]);
    localStorage.setItem(PLANNER_KEY, JSON.stringify(plan));
    return plan;
  }
  return JSON.parse(data);
}
function savePlanner(obj) {
  localStorage.setItem(PLANNER_KEY, JSON.stringify(obj));
}

/* ---------- NAVBAR Hamburger ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', navLinks.classList.contains('show'));
    });
    navToggle.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        navLinks.classList.toggle('show');
        navToggle.classList.toggle('active');
      }
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) {
          navLinks.classList.remove('show');
          navToggle.classList.remove('active');
        }
      });
    });
  }
});

/* ---------- Featured Recipe Carousel (Home) ---------- */
if (document.getElementById('carousel-wrapper')) {
  let recipes = getRecipes();
  let idx = 0;
  const wrapper = document.getElementById('carousel-wrapper');
  function renderSlide(i) {
    wrapper.innerHTML = "";
    let r = recipes[i % recipes.length];
    let slide = document.createElement('div');
    slide.className = 'carousel-slide active';
    slide.innerHTML = `
      <img src="${r.img}" alt="${r.name} image" />
      <h3>${r.name}</h3>
      <div class="recipe-cat">${r.category}</div>
      <div class="calories"><i class="fas fa-fire"></i> ${r.calories} kcal</div>
      <p style="font-size:1rem;color:#555;">${r.instructions.slice(0,70)}...</p>
    `;
    wrapper.appendChild(slide);
  }
  renderSlide(idx);

  document.getElementById('carousel-prev').onclick = () => {
    idx = (idx-1+recipes.length)%recipes.length;
    renderSlide(idx);
  };
  document.getElementById('carousel-next').onclick = () => {
    idx = (idx+1)%recipes.length;
    renderSlide(idx);
  };
}

/* ---------- Recipe Discovery Page ---------- */
if (document.getElementById('recipes-grid')) {
  let recipes = getRecipes();
  let filterCat = "All";
  let searchTerm = "";

  // Render category buttons
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.onclick = () => {
      filterCat = btn.dataset.cat;
      document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderRecipes();
    };
    if(btn.dataset.cat === "All") btn.classList.add('active');
  });
  // Search
  document.getElementById('recipe-search').addEventListener('input', e => {
    searchTerm = e.target.value.trim().toLowerCase();
    renderRecipes();
  });

  // Render Recipe Cards
  function renderRecipes() {
    const grid = document.getElementById('recipes-grid');
    let filtered = recipes.filter(r => {
      let matchCat = (filterCat==='All')||r.category===filterCat;
      let matchSearch = !searchTerm || r.name.toLowerCase().includes(searchTerm) ||
        r.ingredients.join(",").toLowerCase().includes(searchTerm);
      return matchCat && matchSearch;
    });
    grid.innerHTML = '';
    if (filtered.length === 0) {
      grid.innerHTML = `<p style="font-size:1.2rem;color:#b94;">No recipes found.</p>`;
      return;
    }
    filtered.forEach(r => {
      let card = document.createElement('div');
      card.className = 'recipe-card';
      card.setAttribute('tabindex', '0');
      card.innerHTML = `
        <img src="${r.img}" alt="${r.name} image" />
        <h3>${r.name}</h3>
        <div class="recipe-cat">${r.category}</div>
        <div class="calories"><i class="fas fa-fire"></i> ${r.calories} kcal</div>
        <div class="card-actions">
          <button class="edit-btn" aria-label="Edit" title="Edit"><i class="fas fa-edit"></i></button>
          <button class="del-btn" aria-label="Delete" title="Delete"><i class="fas fa-trash"></i></button>
        </div>
      `;
      // Card click: open modal details
      card.onclick = e => {
        if (!e.target.closest('.edit-btn') && !e.target.closest('.del-btn')) {
          showRecipeModal(r);
        }
      };
      // Edit
      card.querySelector('.edit-btn').onclick = ev => {
        ev.stopPropagation();
        openAddEditModal(r);
      };
      // Delete
      card.querySelector('.del-btn').onclick = ev => {
        ev.stopPropagation();
        if(confirm(`Delete recipe "${r.name}"?`)) {
          recipes = recipes.filter(x=>x.id!==r.id);
          saveRecipes(recipes);
          renderRecipes();
        }
      };
      grid.appendChild(card);
      // Card fade-in
      card.style.opacity = 0;
      setTimeout(() => { card.style.opacity = 1; }, 55);
    });
  }
  renderRecipes();

  // Modal for details
  function showRecipeModal(recipe) {
    const modal = document.getElementById('recipe-modal');
    const content = modal.querySelector('.modal-content');
    modal.classList.add('show');
    content.innerHTML = `
      <span class="close-modal" id="modal-close">&times;</span>
      <img src="${recipe.img}" alt="${recipe.name} image" style="width:100%;max-width:260px;border-radius:12px;margin-bottom:0.7rem;" />
      <h2 id="modal-title">${recipe.name}</h2>
      <div class="recipe-cat">${recipe.category}</div>
      <div class="calories"><i class="fas fa-fire"></i> ${recipe.calories} kcal</div>
      <h4>Ingredients:</h4>
      <ul style="margin-bottom:1rem;">${recipe.ingredients.map(i=>`<li>${i}</li>`).join('')}</ul>
      <h4>Instructions:</h4>
      <p>${recipe.instructions}</p>
    `;
    content.querySelector('.close-modal').onclick = () => modal.classList.remove('show');
    modal.onclick = e => { if (e.target === modal) modal.classList.remove('show'); };
  }

  // Add/Edit Modal
  document.getElementById('add-recipe-open').onclick = () => openAddEditModal();
  function openAddEditModal(recipe=null) {
    const modal = document.getElementById('add-edit-modal');
    const form = document.getElementById('add-edit-form');
    modal.classList.add('show');
    document.getElementById('add-edit-title').textContent = recipe ? "Edit Recipe" : "Add Recipe";
    form.reset();

    if(recipe) {
      form['recipe-name'].value = recipe.name;
      form['recipe-category'].value = recipe.category;
      form['recipe-calories'].value = recipe.calories;
      form['recipe-img'].value = recipe.img;
      form['recipe-ingredients'].value = recipe.ingredients.join(", ");
      form['recipe-instructions'].value = recipe.instructions;
      form.dataset.editId = recipe.id;
    } else {
      form.dataset.editId = '';
    }
    modal.querySelector('.close-modal').onclick = () => modal.classList.remove('show');
    modal.onclick = e => { if (e.target === modal) modal.classList.remove('show'); };
  }

  // Add/Edit Submission
  document.getElementById('add-edit-form').onsubmit = function(e) {
    e.preventDefault();
    let name = this['recipe-name'].value.trim();
    let category = this['recipe-category'].value;
    let calories = parseInt(this['recipe-calories'].value);
    let ingredients = this['recipe-ingredients'].value.split(',').map(x=>x.trim()).filter(x=>x);
    let instructions = this['recipe-instructions'].value.trim();

    if(!name || !category || !calories || !ingredients.length || !instructions) {
      alert("Fill all required fields.");
      return;
    }
    let newRecipe = {
      id: this.dataset.editId || String(Date.now()),
      name, category, calories, img, ingredients, instructions,
      macros: {carbs: 30, proteins: 10, fats: 8} // For custom, mock macros
    };
    if(this.dataset.editId) {
      recipes = recipes.map(r=>r.id===this.dataset.editId ? newRecipe : r);
    } else {
      recipes.push(newRecipe);
    }
    saveRecipes(recipes);
    document.getElementById('add-edit-modal').classList.remove('show');
    renderRecipes();
  }
  document.getElementById('add-edit-close').onclick = () => document.getElementById('add-edit-modal').classList.remove('show');
}

/* ---------- Meal Planner Page ---------- */
if (document.getElementById('planner-calendar')) {
  let recipes = getRecipes();
  let planner = getPlanner();
  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

  // Render sidebar recipe list
  function renderSidebar() {
    const list = document.getElementById('planner-recipe-list');
    list.innerHTML = "";
    recipes.forEach(r => {
      let item = document.createElement('div');
      item.className = 'planner-recipe-item';
      item.setAttribute('draggable', 'true');
      item.setAttribute('tabindex', '0');
      item.setAttribute('data-id', r.id);
      item.innerHTML = `<i class="fas fa-grip-vertical"></i> ${r.name}`;
      // Accessibility: keyboard drag
      item.addEventListener('keydown', e => {
        if(e.key==='Enter' || e.key===' ') {
          item.setAttribute('aria-grabbed', 'true');
        }
      });
      list.appendChild(item);
    });
  }

  // Render calendar grid
  function renderCalendar() {
    const grid = document.getElementById('planner-calendar');
    grid.innerHTML = "";
    days.forEach(day => {
      let dayDiv = document.createElement('div');
      dayDiv.className = 'calendar-day';
      dayDiv.setAttribute('data-day', day);
      dayDiv.innerHTML = `<h3>${day}</h3><div class="day-meals"></div>`;
      // Meals
      let meals = planner[day] || [];
      let mealsDiv = dayDiv.querySelector('.day-meals');
      meals.forEach((mid, idx) => {
        let r = recipes.find(x=>x.id===mid.recipeId);
        if (!r) return;
        let mealDiv = document.createElement('div');
        mealDiv.className = 'day-meal'+(mid.cooked?' cooked':'');
        mealDiv.innerHTML = `
          <input type="checkbox" class="meal-cooked-check" ${mid.cooked?'checked':''} data-day="${day}" data-idx="${idx}" aria-label="Mark cooked" />
          <span>${r.name}</span>
          <button class="del-btn" title="Remove" aria-label="Remove"><i class="fas fa-times"></i></button>
        `;
        // Cooked checkbox
        mealDiv.querySelector('.meal-cooked-check').onclick = e => {
          planner[day][idx].cooked = e.target.checked;
          savePlanner(planner);
          renderCalendar();
        };
        // Remove meal
        mealDiv.querySelector('.del-btn').onclick = () => {
          planner[day].splice(idx,1);
          savePlanner(planner);
          renderCalendar();
        };
        mealsDiv.appendChild(mealDiv);
      });
      // Drag-and-drop events
      dayDiv.ondragover = e => { e.preventDefault(); dayDiv.style.background = "#bfe6bf"; };
      dayDiv.ondragleave = e => { dayDiv.style.background = "#fff"; };
      dayDiv.ondrop = e => {
        dayDiv.style.background = "#fff";
        let rid = e.dataTransfer.getData("text/id");
        if(rid) {
          planner[day] = planner[day] || [];
          planner[day].push({ recipeId: rid, cooked: false });
          savePlanner(planner);
          renderCalendar();
        }
      };
      grid.appendChild(dayDiv);
    });
    // Drag events on sidebar items
    document.querySelectorAll('.planner-recipe-item').forEach(item => {
      item.ondragstart = e => {
        item.classList.add('dragging');
        e.dataTransfer.setData("text/id", item.dataset.id);
      };
      item.ondragend = e => {
        item.classList.remove('dragging');
      };
    });
  }

  // Save planner
  document.getElementById('save-planner').onclick = () => {
    savePlanner(planner);
    alert("Weekly meal plan saved!");
  };

  renderSidebar();
  renderCalendar();
}

/* ---------- Dashboard (Shopping List + Nutrition) ---------- */
if (document.getElementById('shopping-list-items')) {
  let recipes = getRecipes();
  let planner = getPlanner();

  // Generate shopping list from planned meals
  document.getElementById('generate-shopping-list').onclick = () => {
    generateShoppingList();
    renderNutrition();
  };
  function generateShoppingList() {
    // Aggregate ingredients from planned meals (unique, count)
    let allIds = [];
    Object.values(planner).forEach(arr => {
      arr.forEach(m => {
        if(!allIds.includes(m.recipeId)) allIds.push(m.recipeId);
      });
    });
    let allIngredients = {};
    allIds.forEach(rid => {
      let r = recipes.find(x=>x.id===rid);
      if(r) r.ingredients.forEach(ing => {
        let key = ing.toLowerCase();
        if(!allIngredients[key]) allIngredients[key]=1;
        else allIngredients[key]++;
      });
    });
    // Render shopping list
    const listDiv = document.getElementById('shopping-list-items');
    listDiv.innerHTML = "";
    Object.entries(allIngredients).forEach(([ing, count], idx) => {
      let div = document.createElement('div');
      div.className = 'shopping-item';
      div.innerHTML = `
        <input type="checkbox" class="shopping-check" id="shop-check-${idx}" />
        <label for="shop-check-${idx}">${ing.charAt(0).toUpperCase()+ing.slice(1)} ${count>1?`<span style="color:#888">x${count}</span>`:""}</label>
      `;
      listDiv.appendChild(div);
    });
    if(Object.keys(allIngredients).length===0) {
      listDiv.innerHTML = `<p style="font-size:1.1rem;">No planned meals. Shopping list is empty.</p>`;
    }
  }

  // Nutrition summary and chart
  function renderNutrition() {
    let allIds = [];
    Object.values(planner).forEach(arr => {
      arr.forEach(m => {
        if(!allIds.includes(m.recipeId)) allIds.push(m.recipeId);
      });
    });
    let sumCalories = 0, sumCarbs = 0, sumProteins = 0, sumFats = 0;
    allIds.forEach(rid => {
      let r = recipes.find(x=>x.id===rid);
      if(r) {
        sumCalories += r.calories;
        sumCarbs += r.macros.carbs || 0;
        sumProteins += r.macros.proteins || 0;
        sumFats += r.macros.fats || 0;
      }
    });
    let info = document.getElementById('nutrition-info');
    info.innerHTML = `
      <div>Total Calories: <b>${sumCalories}</b> ${sumCalories>3000?'<span class="nutrition-over">(Above healthy range!)</span>':''}</div>
      <div>Carbs: <b>${sumCarbs}g</b></div>
      <div>Proteins: <b>${sumProteins}g</b></div>
      <div>Fats: <b>${sumFats}g</b></div>
      <div>Total Meals: <b>${allIds.length}</b></div>
    `;
    // Nutrition Pie Chart
    if(window.nutritionPieChart) window.nutritionPieChart.destroy();
    let ctx = document.getElementById('nutrition-pie-chart').getContext('2d');
    window.nutritionPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Carbs', 'Proteins', 'Fats'],
        datasets: [{
          data: [sumCarbs, sumProteins, sumFats],
          backgroundColor: [ '#ffb347', '#38b000', '#fd7e14' ],
          borderColor: [ '#fff', '#fff', '#fff' ],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true, position: 'bottom' }
        }
      }
    });
  }
  // Initial render
  generateShoppingList();
  renderNutrition();
}

/* ---------- Accessibility: Keyboard Navigation ---------- */
document.querySelectorAll('button, a').forEach(el => {
  el.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      el.click();
    }
  });
});
// ---------- USER AUTH MANAGEMENT ----------
const USER_KEY = 'mealmagic_users';
const SESSION_KEY = 'mealmagic_session';

function getUsers() {
  return JSON.parse(localStorage.getItem(USER_KEY) || '[]');
}
function saveUsers(users) {
  localStorage.setItem(USER_KEY, JSON.stringify(users));
}
function setSession(email) {
  localStorage.setItem(SESSION_KEY, email);
}
function getSession() {
  return localStorage.getItem(SESSION_KEY);
}
function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

// Sign In Logic
if (document.getElementById('signin-form')) {
  document.getElementById('signin-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('signin-email').value.trim().toLowerCase();
    const password = document.getElementById('signin-password').value.trim();
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setSession(email);
      document.getElementById('signin-message').textContent = '';
      window.location.href = 'index.html';
    } else {
      document.getElementById('signin-message').textContent = 'Invalid email or password.';
    }
  });
}

// Register Logic
if (document.getElementById('register-form')) {
  document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('register-email').value.trim().toLowerCase();
    const password = document.getElementById('register-password').value.trim();
    let users = getUsers();
    if (users.find(u => u.email === email)) {
      document.getElementById('register-message').textContent = 'Email already registered.';
      return;
    }
    users.push({email, password});
    saveUsers(users);
    setSession(email);
    document.getElementById('register-message').textContent = '';
    window.location.href = 'index.html';
  });
}

// Auth check for protected pages
const protectedPages = [
   'recipes.html', 'planner.html', 'dashboard.html'
];
if (protectedPages.some(p => window.location.pathname.endsWith(p))) {
  if (!getSession()) {
    window.location.href = 'signin.html';
  }
}

// Logout button (add where needed)
if (document.getElementById('logout-btn')) {
  document.getElementById('logout-btn').onclick = () => {
    clearSession();
    window.location.href = 'signin.html';
  };
}

// ...rest of your previous script.js code for recipes, planner, dashboard...
if (document.getElementById('logout-btn')) {
  document.getElementById('logout-btn').onclick = () => {
    clearSession(); // removes session from localStorage
    window.location.href = 'signin.html';
  };
}
// Session helpers
function getSession() {
  return localStorage.getItem('mealmagic_session');
}
function clearSession() {
  localStorage.removeItem('mealmagic_session');
}

// Show/hide Logout button on homepage, always show on other pages
function updateLogoutBtn() {
  const logoutBtn = document.getElementById('logout-btn');
  if (!logoutBtn) return;
  if (window.location.pathname.endsWith('index.html')) {
    // On homepage: show only if signed in
    if (getSession()) {
      logoutBtn.style.display = "inline-block";
    } else {
      logoutBtn.style.display = "none";
    }
  } else {
    // On all other pages: always show (since user must be signed in)
    logoutBtn.style.display = "inline-block";
  }
}

document.addEventListener('DOMContentLoaded', updateLogoutBtn);

if (document.getElementById('logout-btn')) {
  document.getElementById('logout-btn').onclick = () => {
    clearSession();
    updateLogoutBtn();
    window.location.href = "signin.html";
  };

}
