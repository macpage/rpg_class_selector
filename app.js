// Model

function rpg_class(name, health, damage, defense) {
  this.name = name;
  this.health = health;
  this.damage = damage;
  this.defense = defense;
}

let rpg_classes = [];
rpg_classes[0] = new rpg_class('Mage', 750, 1250, 1000);
rpg_classes[1] = new rpg_class('Warrior', 1000, 1000, 1000);
rpg_classes[2] = new rpg_class('Priest', 1250, 500, 1250);

let id = 0;

function create_user(id, username, rpg_class, skin, outfit, hair, eyes, mouth) {
  this.username = username;
  this.rpg_class = rpg_class;
  this.id = id;
  this.skin = skin;
  this.outfit = outfit;
  this.hair = hair;
  this.eyes = eyes;
  this.mouth = mouth;
}

let selected_class = 0;

// imgs
// Hair
const hair_img = document.createElement('img');

const hair_style = [
  [
    'pics/hair_styles/hair_style_1/hair_style_1_black.png',
    'pics/hair_styles/hair_style_1/hair_style_1_brown.png',
    'pics/hair_styles/hair_style_1/hair_style_1_red.png',
    'pics/hair_styles/hair_style_1/hair_style_1_blond.png',
    'pics/hair_styles/hair_style_1/hair_style_1_grey.png',
    'pics/hair_styles/hair_style_1/hair_style_1_white.png',
  ],
  [
    'pics/hair_styles/hair_style_2/hair_style_2_black.png',
    'pics/hair_styles/hair_style_2/hair_style_2_brown.png',
    'pics/hair_styles/hair_style_2/hair_style_2_red.png',
    'pics/hair_styles/hair_style_2/hair_style_2_blond.png',
    'pics/hair_styles/hair_style_2/hair_style_2_grey.png',
    'pics/hair_styles/hair_style_2/hair_style_2_white.png',
  ],
  [
    'pics/hair_styles/hair_style_3/hair_style_3_black.png',
    'pics/hair_styles/hair_style_3/hair_style_3_brown.png',
    'pics/hair_styles/hair_style_3/hair_style_3_red.png',
    'pics/hair_styles/hair_style_3/hair_style_3_blond.png',
    'pics/hair_styles/hair_style_3/hair_style_3_grey.png',
    'pics/hair_styles/hair_style_3/hair_style_3_white.png',
  ],
  [
    'pics/hair_styles/hair_style_4/hair_style_4_black.png',
    'pics/hair_styles/hair_style_4/hair_style_4_brown.png',
    'pics/hair_styles/hair_style_4/hair_style_4_red.png',
    'pics/hair_styles/hair_style_4/hair_style_4_blond.png',
    'pics/hair_styles/hair_style_4/hair_style_4_grey.png',
    'pics/hair_styles/hair_style_4/hair_style_4_white.png',
  ],
  [
    'pics/hair_styles/hair_style_5/hair_style_5_black.png',
    'pics/hair_styles/hair_style_5/hair_style_5_brown.png',
    'pics/hair_styles/hair_style_5/hair_style_5_red.png',
    'pics/hair_styles/hair_style_5/hair_style_5_blond.png',
    'pics/hair_styles/hair_style_5/hair_style_5_grey.png',
    'pics/hair_styles/hair_style_5/hair_style_5_white.png',
  ],
  ['pics/hair_styles/hair_style_0.png'],
];

// Eye
const eye_img = document.createElement('img');
const eye_style = [
  [
    'pics/eye_styles/eye_style_0/eye_style_0_black.png',
    'pics/eye_styles/eye_style_0/eye_style_0_brown.png',
    'pics/eye_styles/eye_style_0/eye_style_0_grey.png',
    'pics/eye_styles/eye_style_0/eye_style_0_blue.png',
    'pics/eye_styles/eye_style_0/eye_style_0_green.png',
    'pics/eye_styles/eye_style_0/eye_style_0_mix.png',
  ],
  [
    'pics/eye_styles/eye_style_1/eye_style_1_black.png',
    'pics/eye_styles/eye_style_1/eye_style_1_brown.png',
    'pics/eye_styles/eye_style_1/eye_style_1_grey.png',
    'pics/eye_styles/eye_style_1/eye_style_1_blue.png',
    'pics/eye_styles/eye_style_1/eye_style_1_green.png',
    'pics/eye_styles/eye_style_1/eye_style_1_mix.png',
  ],
  ['pics/eye_styles/eye_style_2.png'],
];

// Mouth
const mouth_img = document.createElement('img');
const mouth_style = [
  ['pics/mouth_styles/mouth_style_0.png'],
  ['pics/mouth_styles/mouth_style_1.png'],
  ['pics/mouth_styles/mouth_style_2.png'],
  ['pics/mouth_styles/mouth_style_3.png'],
];

// Skin
const skin_img = document.createElement('img');
const skin_style = [
  ['pics/skin_styles/skin_style_0.png'],
  ['pics/skin_styles/skin_style_1.png'],
  ['pics/skin_styles/skin_style_2.png'],
  ['pics/skin_styles/skin_style_3.png'],
  ['pics/skin_styles/skin_style_4.png'],
  ['pics/skin_styles/skin_style_5.png'],
];

// Outfit

const outfit_img = document.createElement('img');
let outfit_style = [];
const mage_style = [
  'pics/mage_styles/mage_style_0.png',
  'pics/mage_styles/mage_style_1.png',
  'pics/mage_styles/mage_style_2.png',
];

const warrior_style = [
  'pics/warrior_styles/warrior_style_0.png',
  'pics/warrior_styles/warrior_style_1.png',
  'pics/warrior_styles/warrior_style_2.png',
];

const priest_style = [
  'pics/priest_styles/priest_style_0.png',
  'pics/priest_styles/priest_style_1.png',
  'pics/priest_styles/priest_style_2.png',
];

//const user = new create_user(id, 'Mac', rpg_classes[0]);

// User lists
let user_arr = [];

// View
const body = document.querySelector('body');
const menu = document.createElement('div');
const create_box = document.createElement('div');
const title = document.createElement('p');

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
  title.innerHTML = 'Welcome to RPG Character Creator';
  title.setAttribute('id', 'title');
  create_box.append(title);
  create_box.append(username);
  create_box.append(username_btn);
  menu.append(create_box);
}

//show user in list

function create_user_list() {
  const user_list = document.createElement('div');
  user_list.setAttribute('id', 'user_list');
  menu.append(user_list);
  // localStorage.removeItem('list');
  // Get saved data
  const savedData = JSON.parse(localStorage.getItem('list'));
  // if localstorage exist
  if (Array.isArray(savedData)) {
    user_arr = savedData;
    console.log('data retrieved');
    console.log(user_arr);
    user_arr.forEach((e) => {
      console.log(e);
      const user_profile = document.createElement('div');
      let user_profile_picture = document.createElement('div');
      const user_profile_name = document.createElement('p');
      user_profile.setAttribute('id', 'user_profile');
      user_list.append(user_profile);
      user_profile.append(user_profile_picture);
      user_profile.append(user_profile_name);
      user_profile_name.innerHTML = '#000' + e.id + ' ' + e.username;

      // create the profile pic
      const imgs = [];
      for (let i = 0; i < 5; i++) {
        const img = document.createElement('img');
        imgs[i] = img;
        user_profile_picture.append(imgs[i]);
      }
      // iterate through the obejct values and only get the img's
      for (let i = 3; i < 8; i++) {
        console.log(Object.values(e)[i]);
        imgs[i - 3].src = Object.values(e)[i];
      }
    });
  }
}

// Class selection
function class_select() {
  create_box.style.justifyContent = 'start';
  create_box.classList.add('stretchMore');
  create_box.style.width = '50vw';
  create_box.style.height = '65vh';
  // user.username = username.value;
  username.remove();
  username_btn.remove();
  title.remove();
  document.querySelector('#user_list').remove();

  // Add new scene
  box_background.classList.add('box_background');
  create_box.append(box_background);
  // greetings_text.innerHTML = 'Hallo ' + user.username;
  greetings_text.classList.add('greetings_text');
  box_background.append(greetings_text);

  under_text.innerHTML = 'Wähle deine Klasse: ';
  under_text.classList.add('under_text');
  box_background.append(under_text);

  box_background.append(mage_section);
  mage_section.classList.add('class_section');
  mage_section.setAttribute('id', 'mage');
  box_background.append(warrior_section);
  warrior_section.classList.add('class_section');
  warrior_section.setAttribute('id', 'warrior');
  box_background.append(priest_section);
  priest_section.classList.add('class_section');
  priest_section.setAttribute('id', 'priest');

  document.querySelectorAll('.class_section').forEach((e, index) => {
    const class_pic = document.createElement('img');
    if (index == 0) {
      class_pic.src = '/Users/mac/repos/rpg_class_selector/pics/mage.png';
    } else if (index == 1) {
      class_pic.src = 'pics/warrior.png';
    } else if (index == 2) {
      class_pic.src = 'pics/priest.png';
    }
    const class_stats = document.createElement('table');
    class_stats.classList.add('class_stats');
    const tr_1 = document.createElement('tr');
    const td_1 = document.createElement('td');
    const td_2 = document.createElement('td');

    const tr_2 = document.createElement('tr');
    const td_3 = document.createElement('td');
    const td_4 = document.createElement('td');

    const tr_3 = document.createElement('tr');
    const td_5 = document.createElement('td');
    const td_6 = document.createElement('td');

    const tr_4 = document.createElement('tr');
    const td_7 = document.createElement('td');
    const td_8 = document.createElement('td');

    td_1.innerHTML = 'Class:';
    td_2.innerHTML = rpg_classes[index].name;

    td_3.innerHTML = 'Health:';
    td_4.innerHTML = rpg_classes[index].health;

    td_5.innerHTML = 'Strength:';
    td_6.innerHTML = rpg_classes[index].damage;

    td_7.innerHTML = 'Defense:';
    td_8.innerHTML = rpg_classes[index].defense;
    e.append(class_pic);
    e.append(class_stats);
    class_stats.append(tr_1);
    tr_1.append(td_1);
    tr_1.append(td_2);
    class_stats.append(tr_2);
    tr_2.append(td_3);
    tr_2.append(td_4);
    class_stats.append(tr_3);
    tr_3.append(td_5);
    tr_3.append(td_6);
    class_stats.append(tr_4);
    tr_4.append(td_7);
    tr_4.append(td_8);

    td_1.style.fontWeight = 'bold';
    td_1.style.fontSize = '18px';
    td_3.style.fontWeight = 'bold';
    td_3.style.fontSize = '18px';
    td_5.style.fontWeight = 'bold';
    td_5.style.fontSize = '18px';
    td_7.style.fontWeight = 'bold';
    td_7.style.fontSize = '18px';

    e.addEventListener('click', () => {
      switch (e.id) {
        case 'mage':
          outfit_style = mage_style;
          console.log('style selected');
          selected_class = 0;
          break;
        case 'warrior':
          outfit_style = warrior_style;
          selected_class = 1;
          break;
        case 'priest':
          outfit_style = priest_style;
          selected_class = 2;
          break;
      }
      set_up_creator();
    });
  });

  setTimeout(() => {
    document.querySelectorAll('.class_section').forEach((e) => {
      e.classList.add('rollOut');
      console.log('ooohh');
    });
  }, 1500);
}

// Back to name selection
function back_to_name() {
  const back_to_name_button = document.createElement('button');
  back_to_name_button.setAttribute('id', 'back_to_name');
  box_background.append(back_to_name_button);
  back_to_name_button.innerHTML = 'back';

  back_to_name_button.addEventListener('click', () => {
    location.reload();
  });
}

back_to_name();

// Character Creator
const char_creator = document.createElement('div');
char_creator.setAttribute('id', 'char_creator');
const selectors = document.createElement('div');
selectors.setAttribute('id', 'selectors');
const char_preview = document.createElement('div');
char_preview.setAttribute('id', 'char_preview');
const char_preview_section = document.createElement('div');
char_preview_section.setAttribute('id', 'char_preview_section');
char_creator.append(char_preview_section);

function set_up_creator() {
  box_background.remove();
  create_box.append(char_creator);
  char_creator.append(selectors);
  char_preview_section.append(char_preview);
  create_box.classList.add('stretchMore2');
  create_box.style.width = '60vw';
  create_box.style.height = '75vh';

  // Selectors

  let color_id = 0;
  // Hair

  let num;
  let active_selector;
  let active_img;

  const hair_selector = document.createElement('div');
  const hair_selector_name = document.createElement('p');
  const hair_selector_back_btn = document.createElement('button');
  const hair_selector_num = document.createElement('p');
  const hair_selector_forward_btn = document.createElement('button');

  hair_selector.setAttribute('id', 'hair_selector');
  hair_selector.setAttribute('class', 'selector');
  hair_selector.classList.add('hair');

  hair_selector_name.innerHTML = 'Hair';
  let hair_num = 0;
  let hair_color_id = 0;
  hair_selector_num.innerHTML = hair_num;
  selectors.append(hair_selector);
  hair_selector.append(hair_selector_name);
  hair_selector.append(hair_selector_back_btn);
  hair_selector.append(hair_selector_num);
  hair_selector.append(hair_selector_forward_btn);

  function hair_change_style() {
    char_preview.append(hair_img);
    hair_img.src = 'pics/hair_styles/hair_style_1/hair_style_1_black.png';
    hair_selector_back_btn.addEventListener('click', () => {
      if (hair_num > 0) {
        hair_num--;
        hair_selector_num.innerHTML = hair_num;
        hair_img.src = active_selector[hair_num][hair_color_id];
        if (hair_num == 5 && document.getElementById('color_selector')) {
          document.getElementById('color_selector').remove();
          console.log('weg');
          hair_img.src = active_selector[hair_num][0];
        }
      }
    });
    hair_selector_forward_btn.addEventListener('click', () => {
      if (hair_num < 5) {
        active_selector = hair_style;
        hair_num++;
        hair_selector_num.innerHTML = hair_num;

        if (hair_num == 5 && document.getElementById('color_selector')) {
          document.getElementById('color_selector').remove();
          hair_img.src = active_selector[hair_num][0];
          console.log('weg');
        } else {
          hair_img.src = active_selector[hair_num][hair_color_id];
        }
      }
    });
  }

  // Eyes
  const eye_selector = document.createElement('div');
  const eye_selector_name = document.createElement('p');
  const eye_selector_back_btn = document.createElement('button');
  const eye_selector_num = document.createElement('p');
  const eye_selector_forward_btn = document.createElement('button');

  eye_selector.setAttribute('id', 'eye_selector');
  eye_selector.setAttribute('class', 'selector');
  eye_selector.classList.add('eye');

  eye_selector_name.innerHTML = 'Eyes';
  let eye_num = 0;
  let eye_color_id = 0;
  eye_selector_num.innerHTML = eye_num;
  selectors.append(eye_selector);
  eye_selector.append(eye_selector_name);
  eye_selector.append(eye_selector_back_btn);
  eye_selector.append(eye_selector_num);
  eye_selector.append(eye_selector_forward_btn);

  function eye_change_style() {
    char_preview.append(eye_img);
    eye_img.src = eye_style[eye_num][eye_color_id];
    eye_selector_back_btn.addEventListener('click', () => {
      if (eye_num > 0) {
        eye_num--;
        eye_selector_num.innerHTML = eye_num;
        eye_img.src = eye_style[eye_num][eye_color_id];
        if (eye_num == 2 && document.getElementById('color_selector')) {
          document.getElementById('color_selector').remove();
          eye_img.src = eye_style[eye_num][0];
        }
      }
    });
    eye_selector_forward_btn.addEventListener('click', () => {
      if (eye_num < 2) {
        eye_num++;
        eye_selector_num.innerHTML = eye_num;

        if (eye_num == 2 && document.getElementById('color_selector')) {
          document.getElementById('color_selector').remove();
          eye_img.src = eye_style[eye_num][0];
        } else {
          eye_img.src = eye_style[eye_num][eye_color_id];
        }
      }
    });
  }

  // Mouth
  const mouth_selector = document.createElement('div');
  const mouth_selector_name = document.createElement('p');
  const mouth_selector_back_btn = document.createElement('button');
  const mouth_selector_num = document.createElement('p');
  const mouth_selector_forward_btn = document.createElement('button');

  mouth_selector.setAttribute('id', 'mouth_selector');
  mouth_selector.setAttribute('class', 'selector');
  mouth_selector.classList.add('mouth');

  mouth_selector_name.innerHTML = 'Mouth';
  let mouth_num = 0;
  let mouth_color_id = 0;
  mouth_selector_num.innerHTML = mouth_num;
  selectors.append(mouth_selector);
  mouth_selector.append(mouth_selector_name);
  mouth_selector.append(mouth_selector_back_btn);
  mouth_selector.append(mouth_selector_num);
  mouth_selector.append(mouth_selector_forward_btn);

  function mouth_change_style() {
    char_preview.append(mouth_img);
    mouth_img.src = mouth_style[mouth_num][0];
    mouth_selector_back_btn.addEventListener('click', () => {
      if (mouth_num > 0) {
        mouth_num--;
        mouth_selector_num.innerHTML = mouth_num;
        mouth_img.src = mouth_style[mouth_num][0];
      }
    });
    mouth_selector_forward_btn.addEventListener('click', () => {
      if (mouth_num < 4) {
        mouth_num++;
        mouth_selector_num.innerHTML = mouth_num;
        mouth_img.src = mouth_style[mouth_num][0];
      }
    });
  }
  // Skin

  const skin_selector = document.createElement('div');
  const skin_selector_name = document.createElement('p');
  const skin_selector_back_btn = document.createElement('button');
  const skin_selector_num = document.createElement('p');
  const skin_selector_forward_btn = document.createElement('button');

  skin_selector.setAttribute('id', 'skin_selector');
  skin_selector.setAttribute('class', 'selector');
  skin_selector.classList.add('skin');

  skin_selector_name.innerHTML = 'Skin';
  let skin_num = 0;
  let skin_color_id = 0;
  skin_selector_num.innerHTML = skin_num;
  selectors.append(skin_selector);
  skin_selector.append(skin_selector_name);
  skin_selector.append(skin_selector_back_btn);
  skin_selector.append(skin_selector_num);
  skin_selector.append(skin_selector_forward_btn);

  function skin_change_style() {
    char_preview.append(skin_img);
    skin_img.src = skin_style[skin_num][0];
    skin_selector_back_btn.addEventListener('click', () => {
      if (skin_num > 0) {
        skin_num--;
        skin_selector_num.innerHTML = skin_num;
        skin_img.src = skin_style[skin_num][0];
      }
    });
    skin_selector_forward_btn.addEventListener('click', () => {
      if (skin_num < 5) {
        skin_num++;
        skin_selector_num.innerHTML = skin_num;
        skin_img.src = skin_style[skin_num][0];
      }
    });
  }

  // Outfit

  const outfit_selector = document.createElement('div');
  const outfit_selector_name = document.createElement('p');
  const outfit_selector_back_btn = document.createElement('button');
  const outfit_selector_num = document.createElement('p');
  const outfit_selector_forward_btn = document.createElement('button');

  outfit_selector.setAttribute('id', 'outfit_selector');
  outfit_selector.setAttribute('class', 'selector');
  outfit_selector.classList.add('outfit');

  outfit_selector_name.innerHTML = 'Outfit';
  let outfit_num = 0;
  let outfit_color_id = 0;
  outfit_selector_num.innerHTML = outfit_num;
  selectors.append(outfit_selector);
  outfit_selector.append(outfit_selector_name);
  outfit_selector.append(outfit_selector_back_btn);
  outfit_selector.append(outfit_selector_num);
  outfit_selector.append(outfit_selector_forward_btn);

  function outfit_change_style() {
    char_preview.append(outfit_img);
    outfit_img.src = outfit_style[outfit_num];
    outfit_selector_back_btn.addEventListener('click', () => {
      if (outfit_num > 0) {
        outfit_num--;
        outfit_selector_num.innerHTML = outfit_num;
        outfit_img.src = outfit_style[outfit_num];
      }
    });
    outfit_selector_forward_btn.addEventListener('click', () => {
      if (outfit_num < 2) {
        outfit_num++;
        outfit_selector_num.innerHTML = outfit_num;
        outfit_img.src = outfit_style[outfit_num];
      }
    });
  }

  // Color Selector

  const all_colors = [];

  function select_color(selector) {
    const color_selector = document.createElement('div');
    color_selector.setAttribute('id', 'color_selector');
    color_selector.classList.add(selector);
    char_creator.append(color_selector);

    for (let i = 0; i < 6; i++) {
      console.log(all_colors.length);
      const e = document.createElement('input');
      const labels = document.createElement('label');
      labels.innerHTML = i;
      e.setAttribute('type', 'radio');
      e.setAttribute('name', 'color');
      e.style.height = '2vw';
      e.style.width = '2vw';
      all_colors[i] = e;

      color_selector.append(labels);
      labels.append(e);
    }

    all_colors[0].setAttribute('id', 'black 0');
    all_colors[1].setAttribute('id', 'brown 1');
    all_colors[2].setAttribute('id', 'red 2');
    all_colors[3].setAttribute('id', 'blond 3');
    all_colors[4].setAttribute('id', 'grey 4');
    all_colors[5].setAttribute('id', 'white 5');

    all_colors.forEach((e) => {
      e.addEventListener('click', () => {
        change_color(e);
      });
    });

    function change_color(e) {
      console.log(e.id);
      console.log('selector: ' + selector);
      switch (selector) {
        case 'hair':
          num = hair_num;
          console.log('hair num' + num);
          active_selector = hair_style;
          active_img = hair_img;
          hair_color_id = e.id.split(' ')[1];
          if (num == 5) {
            document.getElementById('color_selector').remove();
          }
          break;

        case 'eye':
          num = eye_num;
          console.log('eye num');
          active_selector = eye_style;
          active_img = eye_img;
          eye_color_id = e.id.split(' ')[1];
          break;
      }
      console.log('bro ' + active_selector[num][e.id.split(' ')[1]]);
      console.log('num:' + num);
      active_img.src = active_selector[num][e.id.split(' ')[1]];
      color_id = e.id.split(' ')[1];
    }
  }

  // Char Preview

  function close_color_selector() {
    const selectors = document.querySelectorAll('.selector');
    selectors.forEach((e) => {
      e.addEventListener('click', () => {
        e.style.backgroundColor = ' rgb(132, 0, 255)';

        selectors.forEach((s) => {
          if (
            s.getAttribute('class').split(' ')[1] !=
            e.getAttribute('class').split(' ')[1]
          ) {
            s.style.backgroundColor = ' rgb(64, 64, 64)';
          }
        });

        console.log('loll ' + e.getAttribute('class'));
        if (document.getElementById('color_selector')) {
          if (
            document.getElementById('color_selector').getAttribute('class') ==
            e.getAttribute('class').split(' ')[1]
          ) {
            switch (e.getAttribute('class').split(' ')[1]) {
              case 'hair':
                if (hair_num == 5) {
                  document.getElementById('color_selector').remove();
                  console.log('brooooo');
                }

                break;
              case 'eye':
                if (eye_num == 2) {
                  document.getElementById('color_selector').remove();
                  console.log('bongo');
                }

                break;
            }
            all_colors[color_id].checked = true;
            console.log('found');
          } else {
            document.getElementById('color_selector').remove();
            select_color(e.getAttribute('class').split(' ')[1]);
            document
              .getElementById('color_selector')
              .setAttribute('class', e.getAttribute('class').split(' ')[1]);
            console.log('new');
            switch (e.getAttribute('class').split(' ')[1]) {
              case 'hair':
                if (hair_num == 5) {
                  document.getElementById('color_selector').remove();
                  console.log('brooooo');
                }

                break;
              case 'eye':
                if (eye_num == 2) {
                  document.getElementById('color_selector').remove();
                  console.log('bongo');
                }

                break;
              case 'mouth':
                document.getElementById('color_selector').remove();
                break;
              case 'skin':
                document.getElementById('color_selector').remove();
                break;
              case 'outfit':
                document.getElementById('color_selector').remove();
                break;
              default:
                document.getElementById('color_selector').remove();
                select_color(e.getAttribute('class').split(' ')[1]);
                document
                  .getElementById('color_selector')
                  .setAttribute('class', e.getAttribute('class').split(' ')[1]);
                console.log('new');
                break;
            }
          }
        } else {
          switch (e.getAttribute('class').split(' ')[1]) {
            case 'hair':
              if (hair_num == 5) {
                document.getElementById('color_selector').remove();
                console.log('bongo');
              } else {
                select_color(e.getAttribute('class').split(' ')[1]);
                console.log('foundsdfsd');
                console.log(num);
              }

              break;
            case 'eye':
              if (eye_num == 2) {
                if (document.getElementById('color_selector')) {
                  document.getElementById('color_selector').remove();
                }

                console.log('bongo');
              } else {
                select_color(e.getAttribute('class').split(' ')[1]);
                console.log('foundsdfsd');
                console.log(num);
              }

              break;
            case 'mouth':
              break;
            case 'skin':
              break;
            case 'outfit':
              break;
            default:
              select_color(e.getAttribute('class').split(' ')[1]);
              all_colors[0].checked = true;
              console.log('newwww');
              break;
          }
        }
      });
    });
  }

  setTimeout(() => {
    document.querySelectorAll('.selector').forEach((e) => {
      e.style.display = 'grid';
      console.log('ooohh');
    });
  }, 1000);

  // Add image to button
  document.querySelectorAll('.selector button').forEach((e, index) => {
    let right = document.createElement('img');
    right.src = 'pics/icons/right.png';
    let left = document.createElement('img');
    left.src = 'pics/icons/left.png';
    if (index % 2 == 0) {
      console.log('yeaaahh');

      e.append(left);
    } else {
      e.append(right);
    }
  });

  // Add username under avatar
  function addUsername() {
    const username_div = document.createElement('div');
    username_div.setAttribute('id', 'username');
    char_preview_section.append(username_div);
    username_div.innerHTML = '#000' + user_arr.length + ' -' + username.value;
  }
  setTimeout(() => {
    addUsername();
  }, 1000);

  skin_change_style();
  outfit_change_style();
  hair_change_style();
  eye_change_style();
  mouth_change_style();

  close_color_selector();
}

create_menu();
create_name_input();
create_user_list();

// End Buttons

function end_buttons() {
  const end_buttons = document.createElement('div');
  end_buttons.setAttribute('id', 'end_buttons');
  char_creator.append(end_buttons);

  // Back to name selection
  const quit_button = document.createElement('button');
  quit_button.setAttribute('id', 'quit_button');
  end_buttons.append(quit_button);
  quit_button.innerHTML = 'quit';

  quit_button.addEventListener('click', () => {
    location.reload();
  });

  // save creaion
  const create_button = document.createElement('button');
  create_button.setAttribute('id', 'create_button');
  end_buttons.append(create_button);
  create_button.innerHTML = 'create';

  create_button.addEventListener('click', () => {
    user_arr[user_arr.length] = new create_user(
      user_arr.length,
      username.value,
      rpg_classes[selected_class],
      skin_img.src,
      outfit_img.src,
      hair_img.src,
      eye_img.src,
      mouth_img.src
    );

    localStorage.setItem('list', JSON.stringify(user_arr));
    location.reload();
  });
}
end_buttons();
// Controller
function enter_class_select() {
  username_btn.addEventListener('click', () => {
    class_select();
  });
}

enter_class_select();

// Back to class selection
function back_to_class() {}

// Save character
function save_character() {}
