
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract Evoting{

constructor(){
    Admins.push(msg.sender);
}
//events
event addPresidents(string  name,string regNo, string  school);
event addDelegate(address _delegate);
event deletedelegate(address _delegate);


    //array store delegate students
    address[] public Delegates;

    //array store admins
     address[] public Admins;
     //hasvoted for president
     mapping(address => bool)public hasVoted;

 //hasvoted for accademic
     mapping(address => bool)public hasVotedforAccademic;
 //hasvoted for sports
     mapping(address => bool)public hasVotedSports;

    //array store president
    struct President{
        string  _name;
        string _regNo;
        string _school;
        uint noofVotes;



    }
    //accademic rep
    struct AccademicRep{
        string  _name;
        string _regNo;
        string _school;
        uint noofVotes;



    }
    //SportsRep
    struct SportsRep{
        string  _name;
        string _regNo;
        string _school;
        uint noofVotes;



    }
    mapping(uint => President)public presidents;
 mapping(uint => AccademicRep)public accademicreps;
 mapping(uint => SportsRep)public sportsreps;

    uint _presidentIndex;
      uint _accademicIndex;
        uint _sportsIndex;

    uint totalNumberofVotes;
    uint totalNumberofAccademicVotes;
    uint totalNumberofSportsVotes;
    //array hostel rep
    // array accademic
    //array sports
//modifier only delegate can vote
modifier onlyDelegate() {
        bool isDelegate = false;
        for (uint i = 0; i < Delegates.length; i++) {
            if (Delegates[i] == msg.sender) {
                isDelegate = true;
                break;
            }
        }
        require(isDelegate, "Only delegates can vote");
        _;
    }

    modifier onlyDelegateForAccademic() {
        bool isDelegate = false;
        for (uint i = 0; i < Delegates.length; i++) {
            if (Delegates[i] == msg.sender) {
                isDelegate = true;
                break;
            }
        }
        require(isDelegate, "Only delegates can vote");
        _;
    }
    // Modifier to check if the delegate has not voted yet
    modifier notVoted() {
        require(hasVoted[msg.sender] == false, "Delegate has already voted for President");
        _;
    }
    // Modifier to check if the delegate has not voted yet
    modifier notVotedforSports() {
        require(hasVotedSports[msg.sender] == false, "Delegate has already voted for Sports");
        _;
    }
    // Modifier to check if the delegate has not voted yet
    modifier notVotedforAccademic() {
        require(hasVotedforAccademic[msg.sender] ==false, "Delegate has already voted for Accademic");
        _;
    }
    //only admin can add, delete
    // Modifier to check if the sender is an admin
    modifier onlyAdmin() {
        bool isAdmin = false;
        for (uint i = 0; i < Admins.length; i++) {
            if (Admins[i] == msg.sender) {
                isAdmin = true;
                break;
            }
        }
        require(isAdmin, "Only admins can perform this operation");
        _;
    }
//function add president
function addPresident(string calldata name,string calldata regNo, string calldata school)external onlyAdmin{
    uint _index = _presidentIndex;
    presidents[_index] = President(name,regNo,school,0);
    _presidentIndex += 1;
    emit addPresidents(name, regNo, school);
}
//function add accademicrep
function addAccadmicRep(string calldata name,string calldata regNo, string calldata school)external onlyAdmin{
    uint _index = _accademicIndex;
    accademicreps[_index] = AccademicRep(name,regNo,school,0);
    _accademicIndex += 1;
    //emit addPresidents(name, regNo, school);
}

//function add sports
function addSportsRep(string calldata name,string calldata regNo, string calldata school)external onlyAdmin{
    uint _index = _sportsIndex;
    sportsreps[_index] = SportsRep(name,regNo,school,0);
    _sportsIndex += 1;
   // emit addPresidents(name, regNo, school);
}
// Function to update the details of a president candidate (restricted to admins)
    function updatePresident(uint _index, string calldata name, string calldata regNo, string calldata school) external onlyAdmin {
        require(_index < _presidentIndex, "Invalid president index");
        President storage presi = presidents[_index];
        presi._name = name;
        presi._regNo = regNo;
        presi._school = school;
        emit addPresidents(name, regNo, school);
    }

    // Function to update the details of a president candidate (restricted to admins)
    function updateAccademicRep(uint _index, string calldata name, string calldata regNo, string calldata school) external onlyAdmin {
        require(_index < _accademicIndex, "Invalid president index");
        AccademicRep storage presi = accademicreps[_index];
        presi._name = name;
        presi._regNo = regNo;
        presi._school = school;
        //emit addPresidents(name, regNo, school);
    }
// Function to update the details of a president candidate (restricted to admins)
    function updateSportsRep(uint _index, string calldata name, string calldata regNo, string calldata school) external onlyAdmin {
        require(_index < _sportsIndex, "Invalid president index");
        SportsRep storage presi = sportsreps[_index];
        presi._name = name;
        presi._regNo = regNo;
        presi._school = school;
        //emit addPresidents(name, regNo, school);
    }
//update president

//delete  president

//function votes
function voteForPresident(uint _index)external onlyDelegate notVoted {
    President storage presi = presidents[_index];
    presi.noofVotes = presi.noofVotes+1;
    totalNumberofVotes = totalNumberofVotes + 1;
    hasVoted[msg.sender] = true;
}//function votes for accademic
function voteForAccademicRep(uint _index)external onlyDelegate notVotedforAccademic {
    AccademicRep storage presi = accademicreps[_index];
    presi.noofVotes = presi.noofVotes+1;
    totalNumberofAccademicVotes = totalNumberofAccademicVotes + 1;
    hasVotedforAccademic[msg.sender] = true;
}
//function votes sports
function voteForSports(uint _index)external onlyDelegate notVotedforSports {
    SportsRep storage presi = sportsreps[_index];
    presi.noofVotes = presi.noofVotes+1;
    totalNumberofSportsVotes = totalNumberofSportsVotes + 1;
    hasVotedSports[msg.sender] = true;
}
//function view all

function getAllPresidents() public view returns (President[] memory infos) {
        
        

        infos = new President[](_presidentIndex);
        uint index = 0;
        for (uint i = 0; i < _presidentIndex; ++i) {
            
                infos[index] = presidents[i];
                index +=1;
            }
      

        return infos;
    }

//function view all

function getAllAccademicReps() public view returns (AccademicRep[] memory infos) {
        
        

        infos = new AccademicRep[](_accademicIndex);
        uint index = 0;
        for (uint i = 0; i < _accademicIndex; ++i) {
            
                infos[index] = accademicreps[i];
                index +=1;
            }
      

        return infos;
    }
    //function view all

function getAllSports() public view returns (SportsRep[] memory infos) {
        
        

        infos = new SportsRep[](_sportsIndex);
        uint index = 0;
        for (uint i = 0; i < _sportsIndex; ++i) {
            
                infos[index] = sportsreps[i];
                index +=1;
            }
      

        return infos;
    }


    //view only a single
    

//function add delegates
function addDelegates(address _delegate)public onlyAdmin{
    Delegates.push(_delegate);
    emit addDelegate(_delegate);
}
  function deleteDelegate(address _delegate) public onlyAdmin{
        for (uint i = 0; i < Delegates.length; i++) {
            if (Delegates[i] == _delegate) {
                // Swap the element to be deleted with the last element in the array
                Delegates[i] = Delegates[Delegates.length - 1];
                // Remove the last element (duplicate)
                Delegates.pop();
                break;
            }
        }
    }

//function return total number of votes
function returnTotalNumberOFVotes()public view returns(uint){
    return totalNumberofVotes;
} 
//function return total number of votes
function returnTotalNumberOFAccademic()public view returns(uint){
    return totalNumberofAccademicVotes;
} 
//function return total number of votes
function returnTotalNumberofSports()public view returns(uint){
    return totalNumberofSportsVotes;
} 
}

// Deployer: 0x65E28C9C4Ef1a756d8df1c507b7A84eFcF606fd4
// Deployed to: 0xBa3c3f1ca1fc0530cc4F12909D19CeDEB9d138CF
// Transaction hash: 0x31b09d9fb2c49e0a94e171167405bafebe7ccbdc1ca3a074819b9505d2e30b63
//new comment
