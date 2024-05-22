/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let numberOfNFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_title, _description, _creator, _traittype) {
    const NFT = {
        "title" : _title,
        "description" : _description,
        "creator" : _creator,
        "traittype" : _traittype
    }

    numberOfNFTs.push(NFT);
    console.log(`Minted: ${_title}`);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<numberOfNFTs.length; i++) {
        console.log(`\nID: ${i+1}`);
        console.log(`Title: ${numberOfNFTs[i].title}`);
        console.log(`Description: ${numberOfNFTs[i].description}`);
        console.log(`Creator: ${numberOfNFTs[i].creator}`);
        console.log(`Traittype: ${numberOfNFTs[i].traittype}`);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`\n ${numberOfNFTs.length}`);

}

// call your functions below this line
mintNFT("Cool Avatar", "A unique digital avatar with unique attributes", "Artist", "Eyecolor");
mintNFT("Mystic Dragon", "A unique dragon with mystical powers", "Artistname", "Power");
mintNFT("Chill Beats", "A relaxing lo-fi hip-hop track to chill and study to", "Music producer", "Mood");
mintNFT("Warrior", "A brave warrior from the kingdom of Avalon", "Gamestudio", "Weapon");
mintNFT("Virtual Sneakers", "Limited edition virtual sneakers for your your cool avatar", "FashionDesigner", "SneakerBrand");
listNFTs();
getTotalSupply();

