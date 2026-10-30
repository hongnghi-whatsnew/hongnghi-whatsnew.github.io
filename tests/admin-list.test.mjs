import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const html=readFileSync(new URL('../lib/admin-ui.html',import.meta.url),'utf8');
const source=html.match(/function selectPosts\([\s\S]*?\r?\n}\r?\n/);
assert.ok(source, 'List filtering and sorting must be available');
const context=vm.createContext({});
vm.runInContext(source[0],context);
const posts=[
 {file:'a',title:'Kho A',module:'Kho',version:'v1.9',isNew:true,draft:false,date:'2026-09-01'},
 {file:'b',title:'Kho B',module:'Kho',version:'v1.10',isNew:false,draft:true,date:'2026-10-01'},
 {file:'c',title:'Bán hàng',module:'Bán hàng',version:'',isNew:false,draft:false,date:'2026-10-10'},
];
const ids=(filters={},sort={key:'',direction:1})=>Array.from(context.selectPosts(posts,filters,sort),p=>p.file);
assert.deepEqual(ids(),['a','b','c']);
assert.deepEqual(ids({title:' KHO ',module:'Kho',version:'1.9',label:'new',status:'pub',from:'2026-09-01',to:'2026-09-01'}),['a']);
for(const [filters,want] of [
 [{title:'bán'},['c']], [{module:'Kho'},['a','b']], [{version:'1.10'},['b']],
 [{label:'none'},['b','c']], [{status:'draft'},['b']], [{status:'pub'},['a','c']],
 [{from:'2026-10-01',to:'2026-10-10'},['b','c']], [{from:'2026-11-01'},[]]
]) assert.deepEqual(ids(filters),want);
for(const [key,want,descending] of [
 ['title',['c','a','b'],['b','a','c']],['module',['c','a','b'],['a','b','c']],['version',['c','a','b'],['b','a','c']],
 ['isNew',['b','c','a'],['a','b','c']],['draft',['a','c','b'],['b','a','c']],['date',['a','b','c'],['c','b','a']]
]) {
 assert.deepEqual(ids({}, {key,direction:1}),want);
 assert.deepEqual(ids({}, {key,direction:-1}),descending);
}
assert.deepEqual(posts.map(p=>p.file),['a','b','c'],'Sorting must not mutate API order');
console.log('Admin list filters and sorting passed');
