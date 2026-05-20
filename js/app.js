
// ── 武器炫色石資料 ──
var weaponColorData = [
  // [項次, 顏色, 武器類別, 最小攻, 最大攻, 命中, 鎧外攻, 力量, 魅力, 敏捷, 智力, 精神, 血量, 魔攻, 最小吸魔, 最大吸魔, 吸魔機率, 魔法傷害, 物理格擋, 魔法格擋, PVP增傷, PVP減傷]
  [1,'金色','雙手劍',7,7,'-','-',5,5,'-',2,1,'-','-','-','-','-','-','-','-','-'],
  [2,'紅色','雙手劍','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  [3,'金色','弓','-',4,'-','-',4,'-','-','-',5,2,1,'-','-','-','-','-','-','-','-'],
  [4,'紫色','弓','-',4,'-','-',3,'-','-','-','-','-','-','-','-','-','-','-','-','-'],
  [5,'虹色','弓','-',3,2,1,'-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  [6,'金色','魔杖',9,9,'-','-','-','-','-','-',5,3,1,'-',7,20,50,'30%',200,'-','-'],
  [7,'紫色','魔杖',7,7,'-','-','-','-','-','-',5,3,1,'-','-','-','-','-','-','-','-'],
  [8,'紅色','魔杖',5,3,'-','-','-','-','-','-',3,1,'-','-','-','-','-','-','-','-','-'],
  [9,'金色','雙刀',2,'-',1,'-',1,'-','-','-','-','-','-','-','-','-','-','-','-','-'],
  [10,'紫色','雙刀',3,3,'-','-',2,1,'-','-','-','-','-','-','-','-','-','-','-','-','-'],
  [11,'虹色','雙刀',1,1,1,'-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
  [12,'金色','奇古獸','-',5,'-','-','-','-','-','-',5,'-','-',5,'-','-','-','-','-','-','-'],
  [13,'虹色','奇古獸','-',5,3,2,'-','-','-','-','-',1,'-','-','-','-','-','-','-','-'],
];

var tbWC = document.getElementById('tb-weapon-color');
if(tbWC) weaponColorData.forEach(function(r,i){
  var bg = i%2===1?'#030609':'#040c18';
  var colorMap={'金色':'#f0c060','紫色':'#cc88ff','虹色':'#ff88cc','炫色':'#44ccff','橘色':'#ff8844','紅色':'#ff4444','綠色':'#44cc66','白色':'#c8d0e0','黃色':'#ffee44','混色':'#aaaaaa','藍色':'#44aaff'};
  var cc = colorMap[r[1]]||'#8898a8';
  var td=function(v,c){return '<td style="padding:4px 6px;border:1px solid #060e18;color:'+(v==='-'?'#2a3840':c)+';text-align:center">'+v+'</td>';};
  tbWC.innerHTML+='<tr style="background:'+bg+'">'
    +td(r[0],'#c8a040')
    +'<td style="padding:4px 6px;border:1px solid #060e18;color:'+cc+';text-align:center;font-weight:bold">'+r[1]+'</td>'
    +td(r[2],'#6888a0')
    +td(r[3],'#ff8844')+td(r[4],'#ff8844')+td(r[5],'#ffcc44')+td(r[6],'#ff8844')
    +td(r[7],'#ffcc44')+td(r[8],'#ffcc44')+td(r[9],'#ffcc44')+td(r[10],'#ffcc44')+td(r[11],'#ffcc44')
    +td(r[12],'#ff4444')+td(r[13],'#cc88ff')
    +td(r[14],'#44cc66')+td(r[15],'#44cc66')+td(r[16],'#44aaff')+td(r[17],'#cc88ff')
    +td(r[18],'#44cc66')+td(r[19],'#44cc66')+td(r[20],'#ff4444')+td(r[21],'#44cc66')
    +'</tr>';
});

// ── 防具炫色石資料 ──
var armorColorData = [
  // [項目, 顏色, 部位, 鎧外攻, 血量, 魔力, 魅力, 魔攻, 魔防, 魔法格擋, PVP增傷, PVP減傷, 藥水回復]
  [1,'金色','頭盔','-',300,'-',50,'-',30,2,'-','-','-'],
  [2,'紫色','頭盔','-',200,'-',20,'-',20,1,'-','-','-'],
  [3,'紅色','頭盔','-',100,'-',20,'-',15,'-','-','-','-'],
  [4,'金色','盔甲','-',300,'-',50,'-','-',2,'-','-','-'],
  [5,'紫色','盔甲','-',200,'-',20,'-','-',1,'-','-','-'],
  [6,'紅色','盔甲','-',100,'-',20,'-','-','-','-','-','-'],
  [7,'金色','內衣','-',300,'-',50,'-','-',2,'-','-','-'],
  [8,'紫色','內衣','-',200,'-',20,'-','-',1,'-','-','-'],
  [9,'紅色','內衣','-',100,'-',20,'-','-','-','-','-','-'],
  [10,'金色','手套','-',300,'-',50,'-','-',2,'-','-','-'],
  [11,'紫色','手套','-',200,'-',20,'-','-',1,'-','-','-'],
  [12,'紅色','手套','-',100,'-',20,'-','-','-','-','-','-'],
  [13,'金色','鞋子','-',300,'-',50,'-','-',2,'-','-','-'],
  [14,'紫色','鞋子','-',200,'-',20,'-','-',1,'-','-','-'],
  [15,'粉色','鞋子','-',100,'-',10,'-','-','-','-','-','-'],
  [16,'金色','背甲','-',300,'-',50,'-','-',2,'-','-','-'],
  [17,'紫色','背甲','-',200,'-',20,'-','-',1,'-','-','-'],
  [18,'紅色','背甲','-',100,'-',20,'-','-','-','-','-','-'],
  [19,'金色','戒指','-','-','-','-',10,'-',6,6,'-','-'],
  [20,'炫色','戒指','-','-','-','-',8,'-',5,5,'-','-'],
  [21,'紅色','戒指','-','-','-','-',7,'-',4,4,'-','-'],
  [22,'金色','耳環',10,300,'-','-','-','-','-','-','-',12],
  [23,'紫色','耳環',8,200,'-','-','-','-','-','-','-',10],
  [24,'紅色','耳環',6,100,'-','-','-','-','-','-','-',8],
  
];

var tbAC = document.getElementById('tb-armor-color');
if(tbAC) armorColorData.forEach(function(r,i){
  var bg = i%2===1?'#030609':'#040c18';
  var colorMap={'金色':'#f0c060','紫色':'#cc88ff','虹色':'#ff88cc','炫色':'#44ccff','橘色':'#ff8844','紅色':'#ff4444','綠色':'#44cc66','白色':'#c8d0e0','黃色':'#ffee44','混色':'#aaaaaa','藍色':'#44aaff','黑色':'#8888aa','粉色':'#ffaacc'};
  var cc = colorMap[r[1]]||'#8898a8';
  var td=function(v,c){return '<td style="padding:4px 6px;border:1px solid #060e18;color:'+(v==='-'?'#2a3840':c)+';text-align:center">'+v+'</td>';};
  tbAC.innerHTML+='<tr style="background:'+bg+'">'
    +td(r[0],'#c8a040')
    +'<td style="padding:4px 6px;border:1px solid #060e18;color:'+cc+';text-align:center;font-weight:bold">'+r[1]+'</td>'
    +td(r[2],'#6888a0')
    +td(r[3],'#ff8844')+td(r[4],'#ff4444')+td(r[5],'#8888ff')
    +td(r[6],'#ffcc44')+td(r[7],'#cc88ff')+td(r[8],'#44cc66')
    +td(r[9],'#44cc66')+td(r[10],'#ff4444')+td(r[11],'#44cc66')+td(r[12],'#44ff88')
    +'</tr>';
});

// Clan level bonus
var clanData = [
  [1,1,1,1,2,300],[2,1,1,2,4,600],[3,2,2,3,6,900],[4,2,2,4,8,1200],
  [5,3,3,5,10,1500],[6,3,3,6,12,1800],[7,4,4,7,14,2100],[8,4,4,8,16,2400],
  [9,5,5,9,18,2700],[10,5,5,10,20,3000]
];
var tbClan = document.getElementById('tb-clan');
if(tbClan) clanData.forEach(function(r,i){
  var bg = i%2===1?'#030609':'#040c18';
  tbClan.innerHTML += '<tr style="background:'+bg+'">'
    +'<td style="padding:6px 10px;border:1px solid #060e18;color:#c8a040;text-align:center;font-weight:bold">'+r[0]+'</td>'
    +'<td style="padding:6px 10px;border:1px solid #060e18;color:#ffcc44;text-align:center">+'+r[1]+'</td>'
    +'<td style="padding:6px 10px;border:1px solid #060e18;color:#ff8844;text-align:center">+'+r[2]+'</td>'
    +'<td style="padding:6px 10px;border:1px solid #060e18;color:#cc88ff;text-align:center">+'+r[3]+'</td>'
    +'<td style="padding:6px 10px;border:1px solid #060e18;color:#44cc66;text-align:center">+'+r[4]+'</td>'
    +'<td style="padding:6px 10px;border:1px solid #060e18;color:#ff4444;text-align:center">'+r[5]+'</td>'
    +'</tr>';
});

// Equip over-stability bonus
var equipStabData = [
  [1,'過1',2,2,200,0],[2,'過2',3,3,400,5],[3,'過3',4,4,600,10],
  [4,'過4',5,5,800,15],[5,'過5',5,5,1000,20],[6,'過6',5,5,1200,20]
];
var tbEquipStab = document.getElementById('tb-equip-stab');
if(tbEquipStab) equipStabData.forEach(function(r,i){
  var bg = i%2===1?'#030609':'#040c18';
  tbEquipStab.innerHTML += '<tr style="background:'+bg+'">'
    +'<td style="padding:6px 10px;border:1px solid #060e18;color:#c8a040;text-align:center;font-weight:bold">'+r[0]+'</td>'
    +'<td style="padding:6px 10px;border:1px solid #060e18;color:#ffcc44;text-align:center">'+r[1]+'</td>'
    +'<td style="padding:6px 10px;border:1px solid #060e18;color:#44cc66;text-align:center">'+r[2]+'</td>'
    +'<td style="padding:6px 10px;border:1px solid #060e18;color:#cc88ff;text-align:center">'+r[3]+'</td>'
    +'<td style="padding:6px 10px;border:1px solid #060e18;color:#ff4444;text-align:center">'+r[4]+'</td>'
    +'<td style="padding:6px 10px;border:1px solid #060e18;color:#8888ff;text-align:center">'+r[5]+'</td>'
    +'</tr>';
});

// Reborn bonus tables
var rebornBase = [
  [1,400,400],[2,800,800],[3,1200,1200],[4,1600,1600],[5,2000,2000],
  [6,2400,2400],[7,2800,2800],[8,3200,3200],[9,3600,3600],[10,4000,4000]
];
var knightStats  = [1,3,5,7,9,11,13,15,17,19]; // 力量 & 全傷害減免（相同）
var elfStats     = [[1,1],[3,3],[5,5],[7,7],[9,9],[11,11],[13,13],[15,15],[17,17],[19,19]]; // 力量、敏捷、遠距
var mageStats    = [[1,1,5],[3,3,10],[5,5,15],[7,7,20],[9,9,25],[11,11,30],[13,13,35],[15,15,40],[17,17,45],[19,19,50]]; // 智力、魔攻、魔法傷害
var darkStats    = [1,3,5,7,9,11,13,15,17,19]; // 力量 & 近距離命中傷害

function buildBonusRow(i, cells, odd){
  var bg = odd ? 'background:#030609' : 'background:#040c18';
  var td = function(val,color){return '<td style="padding:6px 10px;border:1px solid #060e18;color:'+color+';text-align:center">'+val+'</td>';};
  var html = '<tr style="'+bg+'">'+td(rebornBase[i][0]+'轉','#c8a040');
  html += td('+'+rebornBase[i][1],'#ff4444');
  html += td('+'+rebornBase[i][2],'#8888ff');
  cells.forEach(function(c){ html += td('+'+c[0],c[1]); });
  html += '</tr>';
  return html;
}

var tbKnight = document.getElementById('tb-knight');
var tbElf    = document.getElementById('tb-elf');
var tbMage   = document.getElementById('tb-mage');
var tbDark   = document.getElementById('tb-dark');

for(var i=0;i<10;i++){
  var odd = i%2===1;
  if(tbKnight) tbKnight.innerHTML += buildBonusRow(i,[[knightStats[i],'#ffcc44'],[knightStats[i],'#44cc66']],odd);
  if(tbElf)    tbElf.innerHTML    += buildBonusRow(i,[[elfStats[i][0],'#ffcc44'],[elfStats[i][1],'#44aaff'],[elfStats[i][1],'#44cc66']],odd);
  if(tbMage)   tbMage.innerHTML   += buildBonusRow(i,[[mageStats[i][0],'#ffcc44'],[mageStats[i][1],'#cc88ff'],[mageStats[i][2],'#ff8844']],odd);
  if(tbDark)   tbDark.innerHTML   += buildBonusRow(i,[[darkStats[i],'#ffcc44'],[darkStats[i],'#44cc66']],odd);
}

// Badge table data
var badges = [
  {name:'🏅 話島徽章',frag:50,gold:'50萬',atk:1,hit:1,ratk:1,rhit:1,matk:'—',hp:50,mp:50,hpreg:5,mpreg:5,pdef:1,gold_row:false},
  {name:'🏅 蟲蟻徽章',frag:100,gold:'100萬',atk:1,hit:1,ratk:1,rhit:1,matk:'—',hp:100,mp:100,hpreg:5,mpreg:5,pdef:2,gold_row:false},
  {name:'🏅 騎士徽章',frag:150,gold:'150萬',atk:2,hit:2,ratk:2,rhit:2,matk:1,hp:150,mp:150,hpreg:5,mpreg:5,pdef:3,gold_row:false},
  {name:'🏅 海音徽章',frag:200,gold:'200萬',atk:2,hit:2,ratk:2,rhit:2,matk:1,hp:200,mp:200,hpreg:10,mpreg:10,pdef:4,gold_row:false},
  {name:'🏅 水晶徽章',frag:250,gold:'250萬',atk:3,hit:3,ratk:3,rhit:3,matk:2,hp:250,mp:250,hpreg:10,mpreg:10,pdef:5,gold_row:false},
  {name:'🏅 奇岩徽章',frag:300,gold:'300萬',atk:3,hit:3,ratk:3,rhit:3,matk:2,hp:300,mp:300,hpreg:12,mpreg:12,pdef:6,gold_row:false},
  {name:'🏅 龍谷徽章',frag:350,gold:'350萬',atk:4,hit:4,ratk:4,rhit:4,matk:2,hp:350,mp:350,hpreg:14,mpreg:14,pdef:7,gold_row:false},
  {name:'🏅 火窟徽章',frag:400,gold:'400萬',atk:4,hit:4,ratk:4,rhit:4,matk:3,hp:400,mp:400,hpreg:16,mpreg:16,pdef:8,gold_row:false},
  {name:'🏅 遺忘徽章',frag:450,gold:'450萬',atk:5,hit:5,ratk:5,rhit:5,matk:4,hp:450,mp:450,hpreg:18,mpreg:18,pdef:9,gold_row:false},
  {name:'👑 夢島徽章',frag:500,gold:'500萬',atk:5,hit:5,ratk:5,rhit:5,matk:5,hp:500,mp:500,hpreg:20,mpreg:20,pdef:10,gold_row:true}
];
var tbody = document.getElementById('badgeTableBody');
badges.forEach(function(b){
  var bg1 = b.gold_row ? '#1a0e00' : '';
  var bc = b.gold_row ? '#c8942844' : '#060e18';
  var nc = b.gold_row ? '#f0c060' : '#c8a040';
  var fw = b.gold_row ? 'bold' : 'normal';
  var td = function(val,color){return '<td style="padding:6px 8px;border:1px solid '+bc+';color:'+color+';text-align:center;font-weight:'+fw+'">'+val+'</td>';};
  tbody.innerHTML += '<tr style="background:'+bg1+'">'
    +'<td style="padding:6px 10px;border:1px solid '+bc+';color:'+nc+';font-weight:bold;white-space:nowrap">'+b.name+'</td>'
    +td(b.frag,'#7888a0')
    +td(b.gold,'#ffcc44')
    +td(b.atk,'#ff8844')
    +td(b.hit,'#ffcc44')
    +td(b.ratk,'#44aaff')
    +td(b.rhit,'#44aaff')
    +td(b.matk,b.matk==='—'?'#446688':'#cc88ff')
    +td(b.hp,'#ff4444')
    +td(b.mp,'#8888ff')
    +td(b.hpreg,'#44ff88')
    +td(b.mpreg,'#44ff88')
    +td(b.pdef,'#ffaa44')
    +'</tr>';
});

function openCard(el){
  var d=el.dataset;
  document.getElementById('modalImg').src=d.img;
  document.getElementById('modalImg').alt=d.name;
  document.getElementById('modalName').textContent=d.name;
  document.getElementById('modalEn').textContent=d.en;
  document.getElementById('modalAbility').textContent=d.ability;
  var s=d.stats.split('|'),html='';
  for(var i=0;i<s.length;i++) html+='<span class="modal-stat">'+s[i]+'</span>';
  document.getElementById('modalStats').innerHTML=html;
  document.getElementById('cardModal').classList.add('open');
}
function closeModal(e){
  if(e.target===document.getElementById('cardModal')) document.getElementById('cardModal').classList.remove('open');
}
var pages=['home','news','classes','boss','items','guide','rank','equip','weapon','skill','mapbadge','material','newbie','color','bonus'];
function showPage(id){
  pages.forEach(function(p){
    var el=document.getElementById('page-'+p);
    if(el) el.style.display=(p===id)?'block':'none';
  });
  window.scrollTo({top:0,behavior:'smooth'});
}
document.getElementById('bossGrid').addEventListener('click',function(e){
  var bc=e.target.closest('.bc');
  if(bc) openCard(bc);
});
function filterCards(type){
  document.querySelectorAll('.cf-btn').forEach(function(b){b.classList.remove('act');});
  var ab=document.getElementById('btn-'+type);
  if(ab) ab.classList.add('act');
  document.querySelectorAll('.bc').forEach(function(c){
    c.classList.toggle('hidden',type!=='all'&&c.dataset.type!==type);
  });
}
