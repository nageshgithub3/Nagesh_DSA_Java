class MyStack {
    private Queue<Integer>q1;   
    

    public MyStack() {
        q1=new LinkedList<>();
        
    }
    
    public void push(int x) {
        q1.add(x);
        
    }
    
    public int pop() {

        if(q1.isEmpty()) return -1;

        // length of q1
        int n = q1.size();

        // remove n-1 elements
        for(int i=0;i<n-1;i++){
            q1.add(q1.remove());
        }

        // remove and return last element
        int ans = q1.remove();

        return ans;
        
    }
    
    public int top() {
        if(q1.isEmpty()){
            return -1;
        }

        int n = q1.size();

        for(int i=0;i<n-1;i++){
            q1.add(q1.remove());
        }

        int front = q1.remove();

        q1.add(front);

        return front;
    }
    
    public boolean empty() {
        return q1.size() == 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */