let Singleton = function(){ 
  
    if (typeof Singleton.instance === 'object') {
          return Singleton.instance;
      }
      
      this.test = 1;
      
      Singleton.instance = this;
  
    return this;
  }
  
  let obj1 = new Singleton();
  let obj2 = new Singleton();
  console.log(obj1 === obj2);