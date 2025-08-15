//-------First challenge---------------------------------------
const editor = {
    title: "my first blog",
    getUpperTitle() {
        return this.title.toUpperCase();
    },
};

const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());

// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"
//.bind(editor); in index 8
//console.log(getTitle()) in index 9

//-------Secound challenge---------------------------------------
const formHandler = {
    value: 'initial',
    onChange(newValue) {
        this.value = newValue;
    }
};
function simulateInputChange(callback) {
    callback('updated');
}
simulateInputChange(formHandler.onChange.bind(formHandler));
console.log(formHandler.value);

// ❓ Now log formHandler.value
//Your Tasks:
//1] Predict what formHandler.value will be.
/* in this task the console.log print (undefined)*/

//2] Fix the bug using either .bind() or an arrow function (your choice).
/*simulateInputChange(formHandler.onChange.bind(formHandler)); you will put .bind(formHandler)*/

//Explain which fix you used and why.
/*i use bind in index:26 to show the function simulateInputChange
the formHandler.onChange to arrow the callback is the this in object formHandler*/

//-------Theard challenge---------------------------------------
const translator = {
    language: "Arabic",
    getLanguage() {
        return `Current language: ${this.language}`;
    },
};

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.
// const logLanguageInfo = translator.getLanguage.bind(translator);
// console.log(logLanguageInfo());
//------- OR -------
// function logLanguageInfo(getting){
//     console.log(getting());
// }
// logLanguageInfo(translator.getLanguage.bind(translator));