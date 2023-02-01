const gan="ami tomake bole debo ki j aka dirgho rat ami hete geci biran pothe";
console.log(gan.includes('aka'));    // string ar vitor ja khujteci oita ace kina check krbe..
console.log(gan.includes('Aka'));   /// case sensitive letter boro choto hoile false dibe
console.log(gan.indexOf('aka'));   // 26 bolte aka  ar a 26 number alphabet a soro hyce
console.log(gan.indexOf('akaa'));  // -1 bolte ai string ta te akaa bolte kono sobdo nai
console.log(gan.startsWith('ami'));  //cheack krbe string ta ami diye soro hyce kina..paile true dekhabe
console.log(gan.startsWith('amii'));  // check kre na paile false dekhabe
console.log(gan.endsWith('pothe'));    // check kore dekhbe pothe diye sesh hyce nki hoile true dekhabe
console.log(gan.endsWith('potta'));    // check kore dekhbe na paile false dekhabe