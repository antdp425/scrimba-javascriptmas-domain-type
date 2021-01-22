function domainType(domains) {
   let domainTypes = {
      org: "organization",
      com: "commercial",
      net: "network",
      info: "information"
   }

   let domainList = []

   domains.forEach(domain => {
      let dom = domain.split(".")
      let domName = domainTypes[dom.pop()]
      !domainList.includes(domName) ? domainList.push(domName) : null
   })

   return domainList
}



/**
* Test Suite 
*/
describe('domainType()', () => {
   it('returns list of domain types', () => {
       // arrange
       const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
       
       // act
       const result = domainType(domains);

       // log
       console.log("result: ", result);
       
       // assert
       expect(result).toEqual(["organization", "commercial", "network", "information"]);
   });
});