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
//getTitle() in index 9
