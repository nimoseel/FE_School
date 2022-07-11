객체를 지향한다?
객체를 많이 만들겠다

객체 : 행동, 상태를 가짐 
행동은 메소드, 상태는 프로퍼티 

const me = {
    name : '이소민 ',
    address : '경기도 시흥시 OO길',
    phoneNum : '010-8515-2311',
    canWalk : function(){
        console.log('재현이가 걷는다.');
    },
    teaching : function(student){
        student.levelUp();
    }
}

const student = {
    level: 1,
    levelUp : function(){
        this.level++;
    }
}

/*
우리가 만들어낸 객체는 한번 생성하고 나면 끝이다. 
효율적이지 않음... 객체를 만들어낼 수 함수가 없을까? - 생성자 ! 
생성자를 통해 생성된 객체는 같은 프로퍼티와 메서드를 공유할 수 있음 


생성자는 기본적으로 함수 
암묵적으로 대문자로 시작하는 이름을 가지는 것으로 약속되어 있음. 
*/

//생성자 함수 
function NewFactory(name){
    this.name = name
    //robot1.name 
    this.sayYourName = function(){
        console.log(`삐리삐리리리 제 이름은 ${this.name}입니다.`)
    }
}

const robot1 = new NewFactory('재현');
생성자 함수의 this는 인스턴스를 참조한다. 


___
function Food(name){
    this.name = name
    this.sya
}

this 문맥에 따라 가리키는 것이 달라짐 
앞으로 만들어질 인스턴스 자기 자신을 가르키도록 사용할 수 있음  - this 바인딩
/ 런타임 상에서 this바인딩 동적으로 결정 

const foods = ['짜장면','볶음밥','치킨','해장국'];
function FoodBot(foodNames){
    this.menu = foodNames;
}

const foodBotMark1 = new FoodBot(foods);

소수점 나가리하려고 소수점...
Math.random하면 0-1미만

재현님 지금 코드에 foods.length하면 인자에 foods 말고 다른 배열 들어왔을 때 오류가 날 것 같습니다


생성자가 클래스고 클래스가 타입이다

자바스크립트는 타입 기반 언어 흑흑

재현님 코드 

// const me = {
        //     name: '한재현',
        //     address: '제주도 제주시 인다 1길',
        //     phoneNum: '010-8001-6536',
        //     canWalk: function () {
        //         console.log('재현이가 걷는다.');
        //     },
        //     teaching: function (student) {
        //         student.levelUp();
        //     }
        // }

        // const student = {
        //     level: 1,
        //     levelUp: function () {
        //         this.level++;
        //     }
        // }

        function Me(name, address, phoneNum) {
            this.name = name;
            this.address = address;
            this.phoneNum = phoneNum;
        }

        Me.prototype.canWalk = function () {
            console.log('재현이가 걷는다.');
        }

        Me.prototype.teaching = function (student) {
            student.levelUp();
        }

        function Student(level) {
            this.level = level;
        }

        Student.prototype.levelUp = function () {
            this.level++;
        }

call - 프로퍼티 받아오기
object.create - 함수 상속하기