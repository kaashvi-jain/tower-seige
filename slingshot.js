class SlingShot{
    constructor(body1,pointB){
        var options= {
            bodyA:body1,pointB:pointB,length:10,stiffness:0.04
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        this.pointB = pointB
    }
    attached(body){
        this.sling.bodyA = body;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
            line (pointA.x,pointA.y,pointB.x,pointB.y);
    
        }
       
    }
    fly(){
        this.sling.bodyA=null;
    }
}