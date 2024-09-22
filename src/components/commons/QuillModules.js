import hljs from 'highlight.js'; 
window.hljs = hljs;

export const quillModules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'align': [] }],
    ['blockquote', 'code-block'],
    ['link', 'image', 'video'],
    ['clean'],  
  ],
  clipboard: {
    matchVisual: false,  
  },
  history: {
    delay: 1000,  
    maxStack: 100,
    userOnly: true,
  },
  syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,  
  },

}