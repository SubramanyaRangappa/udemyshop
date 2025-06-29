class APIFilters {
    constructor(query, queryStr) {
      this.query = query;
      this.queryStr = queryStr;
    }
  
    search() {
      const keyword = this.queryStr.keyword
        ? {
            name: {
              $regex: this.queryStr.keyword,
              $options: "i",
            },
          }
        : {};
  
      this.query = this.query.find({ ...keyword });
      return this;
    }
  
    filters() {
      const queryCopy = { ...this.queryStr };
      console.log("querycopy",queryCopy);
      
      // Fields to remove
      const fieldsToRemove = ["keyword"];
      fieldsToRemove.forEach((el) => delete queryCopy[el]);
  
      // Advance filter for price, ratings etc      
      this.query = this.query.find(queryStr);
      return this;
    }
  }
  
  export default APIFilters;