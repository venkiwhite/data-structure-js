/* Javascript Queue */

function Node(value) {
    this.value = value;
    this.next = undefined;
}

function Queue() {

    this.enqueue = function(value) {
        this.oldLast = this.last;
        this.last = new Node(value);
        if(this.isEmpty()) {
            this.first = this.last;
        } else {
            this.oldLast.next = this.last;
        }
    }

    this.dequeue = function() {
        var dequeueValue = this.first.value;
        this.first = this.first.next;
        return dequeueValue;
    }

    this.hasNext = function() {
        if(this.first) {
            return this.first.next != undefined;
        }
        return false;
    }

    this.isEmpty = function() {
        return this.first == undefined;
    }

    this.getValues = function() {
        var current = this.first;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
