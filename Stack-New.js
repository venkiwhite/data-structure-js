function  Node(value, nodeRef) {
    this.value = value;
    this.next = nodeRef;
}

function Stack() {
    
    this.push = function(value) {
        this.next = this.first;
        this.first = new Node(value, this.next);
    }

    this.pop = function() {
        var popValue = this.first.value;
        this.first = this.first.next;
        return popValue;
    }

    this.hasNext = function() {
        return this.next != undefined;
    }

    this.isEmpty = function() {
        return this.first == undefined;
    }

    this.getValues = function() {
        var current = this.first;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

}
