// Model
function rpg_class(name, health, damage, defense) {
  this.name = name;
  this.health = health;
  this.damage = damage;
  this.defense = defense;
}

const mage_class = new rpg_class('Mage', 750, 1250, 1000);

function create_user(username, rpg_class) {
  this.username = username;
  this.rpg_class = rpg_class;
}

const user = new create_user('Mac', mage_class);
// View
const body = document.querySelector('body');
const menu = document.createElement('div');
const create_box = document.createElement('div');

const username = document.createElement('input');
const username_btn = document.createElement('button');

const box_background = document.createElement('div');
const greetings_text = document.createElement('h1');
const under_text = document.createElement('h2');
const mage_section = document.createElement('div');
const warrior_section = document.createElement('div');
const priest_section = document.createElement('div');

// Menu erstellen
function create_menu() {
  menu.setAttribute('id', 'menu');
  body.append(menu);
}

// Input für username erstellen
function create_name_input() {
  create_box.setAttribute('id', 'create_box');
  create_box.classList.add('stretchOut');
  username.setAttribute('id', 'username_input');
  username_btn.setAttribute('id', 'username_btn');
  username_btn.innerHTML = 'OK';
  username.placeholder = 'Enter your Name...';
  create_box.append(username);
  create_box.append(username_btn);
  menu.append(create_box);
}

// Class selection
function class_select() {
  create_box.style.justifyContent = 'start';
  create_box.classList.add('stretchMore');
  create_box.style.width = '50vw';
  create_box.style.height = '60vh';
  user.username = username.value;
  username.remove();
  username_btn.remove();

  // Add new scene
  box_background.classList.add('box_background');
  create_box.append(box_background);
  greetings_text.innerHTML = 'Hallo ' + user.username;
  greetings_text.classList.add('greetings_text');
  box_background.append(greetings_text);

  under_text.innerHTML = 'Wähle deine Klasse: ';
  under_text.classList.add('under_text');
  box_background.append(under_text);

  box_background.append(mage_section);
  mage_section.classList.add('class_section');
  box_background.append(warrior_section);
  warrior_section.classList.add('class_section');
  box_background.append(priest_section);
  priest_section.classList.add('class_section');

  document.querySelectorAll('.class_section').forEach((e) => {
    const class_pic = document.createElement('img');
    const class_stats = document.createElement('table');
    const tr_1 = document.createElement('tr');
    const td_1 = document.createElement('td');

    e.append(class_pic);
    e.append(class_stats);
    class_stats.append(tr_1);
  });

  setTimeout(() => {
    document.querySelectorAll('.class_section').forEach((e) => {
      e.classList.add('rollOut');
      console.log('ooohh');
    });
  }, 1500);
}

create_menu();
create_name_input();
// Controller
console.log(user.rpg_class);
function enter_class_select() {
  username_btn.addEventListener('click', () => {
    class_select();
  });
}

enter_class_select();
