//Javascript stack linked list data structure (no array)
function node(value, noderef) {
    this.value = value;
    this.next = undefined;
}
function queue() {
    this.enqueue = function (value) {
        this.oldlast = this.last;
        this.last = new node(value);
        if (this.isempty())
            this.first = this.last;
        else 
           this.oldlast.next = this.last;
    }
    this.dequeue = function () {
        var queuvalue = this.first.value;
        this.first = this.first.next;
        return queuvalue;
    }
    this.hasnext = function () {
        return this.first.next != undefined;
    }
    this.isempty = function () {
        return this.first == undefined;
    }

this.getValues = function() {
        var curr = this.first;
         while (curr) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
}

var q = new queue();
q.enqueue(10);
undefined
q.enqueue(20);
q.enqueue(50);

undefined
q.getValues();
