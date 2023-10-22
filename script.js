$(document).ready(function () {
    class ContentItem {
        constructor(id, name, des, category) {
            this.id = id;
            this.name = name;
            this.des = des;
            this.category = category;
        }
        
        updateContentItem(userId, name, des, category) {
            if (this.id === userId) {
                if (name !== null) {
                    this.name = name;
                }
                if (des !== null) {
                    this.des = des;
                }
                if (category !== null) {
                    this.category = category;
                }
            }
        }
        
        toString() {
            return `
                <div id='content-item-${this.id}'>
                    <h2>${this.name}</h2>
                    <p>${this.des}</p>
                    <div>${this.category}</div>
                </div>
            `;
        }
    }
    
    const item = new ContentItem(1, 'Item 1', 'Description 1', 'Category A');
    console.log(item.toString());
});
