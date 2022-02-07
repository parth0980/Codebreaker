window.onload = function(){
        // Array to hold the button names, which will be displayed on the website
        var buttonCaption = ["Addition", "Multiplication", "Number of Digits", "Palindrome", "Num Pyramid",
							 "* Pyramid", "Add Array", "Prime Array", "Odd in Array", "All Factorial",
							 "Mod without mod", "Fibonacci", "Plaindromes till num", "Fact 1 to 10", "Matrix Multiplication",
							 "Negative Positive", "Two Halfs", "pow of 5", "Sum of Digits", "Countdown","Sum 10 to 30","Convert to base 2","Multuiplication Table",
             "Power of ab without pow","LCM","GCD","Sum of n primes","Random name","Lucky","Roots","Enter till 0","positive or negative","Positive in array","Area of triangle","Grade","triangles of numbers",
            "right angled triangle","inverted triangle","square","product of digits"];
        // Loop till the number of button you want
        for (var i = 0; i < 40; i++){

              var newButton = document.createElement("button"); // Creates the button element
              $("nav").append(newButton); // Add it in the navigation section of your Html Code
              $(newButton).attr("id", "button" + (i+1));  // Assings Id to button corresposnding to its order
              $(newButton).html(buttonCaption[i]);  // Gets the name of the button and assing it
              $(newButton).attr("onClick", "execute("+i+");") // add onClick event to each button
              $(newButton).attr("class", "button"); // add class to button
        }

}



// Takes the problem number and display it description, Js Code, FlowChart
function execute(problemId) {
        // Array which holds the discription of each problem
        var descriptionOfProblem = ['Sum of 10 numbers','Multiply 5 numbers','Finding The Number of Digits',"Checking For Palindrome",'Number Pyramid','Star Pyramid','Sum of Elements of Array','Counting Prime Numbers in an Array','Display Odd Number in Array',
        'Display All Factorials Till a Number Less than 10','Modulo Without Using Modulo','Fibonacci','All Palindrome Till A Number More than 10','Factorial of 1 to 10','Matrix Multiplication',
        'First 4 Negative numbers equals to next 4 positive Numbers','Sum of two Halfs Equal','How Many power of 5 are there in a Number','Sum of digits','CountDown','Sum of 10 to 30',
        'Convert base to 2', 'Multiplication Table','Power of a to b without using power function','LCM','GCD','Sum of n Primes','Random Name','Lucky Lottery','Checking Roots',
        'Numbers will be shown positive or Negative till a 0 is entered','the entered numbers are negative or postive','How many Positive Numbers in an array','Area of triangle','Grades','pascal triangle','stars formed in a right angled triangle form','inverted triangle',
        'square of n rows','product of digits'];
		/* for teaching purposes, we used some pure JS and some jQuery codes in the following lines.
		   compare them, and learn both */
        var newButton1 = document.createElement("button"); // Creates the button element
        $("").append(newButton1); // Add it in the naviga
        document.getElementById("description").innerHTML= "<p> Computational thinking problem for a program to "+descriptionOfProblem[problemId] +"</p>"; // Getting the corresponding description of the problem from discription array
        var newButton1 = document.createElement("button"); // Creates the button element
        $("#description").append(newButton1); // Add it in the navigation section of your Html Code
                      // Assings Id to button corresposnding to its order
        $(newButton1).html("Run");  // Gets the name of the button and assing it
        $(newButton1).attr("onClick", "problem(" + (problemId+1) +");") // add onClick event to each button
        $(newButton1).attr("class", "button"); // add class to button

        document.getElementById("flowchart").setAttribute("src","./images/fc_" + (problemId+1) + ".jpg"); // gets the image of flowchart
        document.getElementById("flowchart").style.display="none";
        $("#javaScript").attr("src","./images/js_" + (problemId+1) + ".jpg"); // gets the image of javascript code
        $("#javaScript").css("display","none");
        $("#anotherSolution").css("display","none");
        $("#checkbox1").prop("checked",false);
        document.getElementById("checkbox2").checked=false;
        document.getElementById("checkbox3").checked=false;
}

function problem(problemId){
var i,mul=1,z=problemId;
switch(z){

//problem1
case 1:
var count=0;
for(i=0;i<=10;i++)
{
count=count+i;
}
alert("Sum of 1 to 10: "+count);
break;

//problem2
case 2:
for(i=1;i<=5;i++)
{
  var mu=prompt("Enter number","");
  mul=mul*mu;
}
alert("Mul 5 numbers :"+mul);
break;

//problem3
case 3:
var num = parseInt(prompt("Please enter the Number:",""));
var count=0;
do{
num=Math.floor(num/10);
  count++;
}
  while(num!==0)
  alert(count);
  break;

//problem4
case 4:
var rem=0;
var revdig=0;
var num=parseInt(prompt("Please enter the Number:",""));
var a=num;
while(num>0){
rem=num%10;
num=Math.floor(num/10)
revdig=revdig*10+rem;
}
if(a==revdig){

  alert("The Number "+a+" is a Palindrome");
}
  else{
alert("The Number "+a+" is not a Palindrome");
  }
break;

//problem5
case 5:
var a;
var n=prompt("Enter a number for the no. of rows in a pattern");
for(var i=1;i<=n;i++)
{
  for(var j=i;j<=i;j++)
  {
   document.write(j+" ");
  }
document.write("<br/>");
}
break;

//problem6
case 6:
var i,j;
var num=parseInt(prompt("Please enter the Number:",""));
for(i=1;i<=num;i++)
{
for(j=1;j<=i;j++)
  {
  document.write('*');
  }
  document.write('<br/>');
}
break;

//problem7
case 7:
var n=parseInt(prompt("Enter the number of elements in the array:",""));
myArray=new Array(n);
for(i=0;i<n;i++){
myArray[i]=parseInt(prompt("Enter the "+(i+1)+" element:",""));
}
sum=0;
for(i=0;i<myArray.length;i++){
sum=sum+myArray[i];

}
alert(sum);
break;

//problem8
case 8:
var count=0;
var num=parseInt(prompt("Enter the Number of element of the array:",""));
  a=new Array(num);
  for(i=0;i<num;i++)
  {
a[i]=parseInt(prompt("add numbers in array:",""));
if(prime(a[i])==true)
{
  count=count+1;
}
  }
alert(count);

function prime(num){

var flag="true";
var d=2;

while((flag=="true")&&(d<=num)){
  if(num%d==0){
            flag="false";
            }
  d=d+1;
}
return flag;
}

break;

//problem9
case 9:
var num=parseInt(prompt("Enter the Number of elements of the array:",""));

a=new Array(num)
for(i=0;i<num;i++)
{
a[i]=parseInt(prompt("add numbers in array:",""));
}
for(i=0;i<num;i++)
{
if(a[i]%2!=0){
document.write(a[i]);
}
}
  break;

//problem10
case 10:
var i,no;
no=parseInt(prompt("Enter a Number between 1 to 10:",""));
if(no>10){
alert("Error!");
}
else{
for(var num=1;num<=no;num++){
var factor=1;
for(i=1; i<=num;i++){

  factor= factor*i;
}
alert(factor);
}
}
break;

//problem11
case 11:
var num=parseInt(prompt("Enter the Number:",""));
var div=parseInt(prompt("Enter the divisior:",""));
while(num>div){
  num=num-div;
}
  alert(num);
break;

//problem12
case 12:
var a=parseInt(prompt("Please enter the Number:",""));
var f=0;
var s=1;
var sum=0;
for(var i=1;i<=a;i++){
  document.write(f+",");
  sum=f+s;
  f=s;
  s=sum;

}
break;


//problem13
case 13:
var n=parseInt(prompt("Please enter the Number more than 10:",""));
function palin(num){
var rem=0;
var revdig=0;
var a=num;
while(num>0){
  rem=num%10;
  num=Math.floor(num/10);
  revdig=revdig*10+rem;
}
  if (a==revdig){
return revdig;

  }
}
  for(i=10;i<n;i++){
    if(palin(i)==1){
      alert(i);
    }
  }
break;

//problem14
case 14:
function fact(j) {

var no=1;
for(var i=1;i<=j;i++){
no=(no*i);
}
return no;
}
for (j=1;j<=10;j++){
  var x=fact(j);
  document.write("factorial of "+j+" is "+x+"<br/>");
}
break;


//problem15
case 15:
function multiply(a,b) {
var aNumRows=a.length, aNumCols=a[0].length,
    bNumRows=b.length, bNumCols=b[0].length,
    m=new Array(aNumRows);
    for(var r=0;r< aNumRows;++r){
      m[r]=new Array(bNumCols);
      for(var c=0; c<bNumCols;c++){
        m[r][c]=0;
        for(var i=0;i< aNumCols;i++){
          m[r][c] += a[r][i] * b[i][c];
        }
      }
    }
    return m;
}


function display(m){
  for(var r=0;r<m.length;r++){
    document.write('&nbsp;&nbsp;' +m[r].join(' ')+'<br/>');
  }
}

var a=[[8,3],[2,4],[3,6]]
var b=[[1,2,3],[4,6,8]];
    document.write('matrix a:<br/>');
    display(a);
    document.write('matrix b:<br/>');
    display(b);
    document.write('a*b=<br/>');
    display(multiply(a,b));
break;


//problem16
case 16:
var cnt1=0;
var cnt2=0;
  for(var i=1;i<=4;i++)
  {
    var num=parseInt(prompt("Please enter the Number:",""));
    if(num<0)
    {
      cnt1=cnt1+1;
    }
  }
  for(var i=1;i<=4;i++){
var num=parseInt(prompt("Please enter the Number:",""));
if(num>0)
{
cnt2=cnt2+1;
}
  }
  if(cnt1==cnt2)
  {
    alert("yes");
  }
  else
    {
      alert("no");
    }
break;

//problem17
case 17:
var sum1=0;
var sum2=0;
for(var i=1;i<=4;i++)
{
  var num=parseInt(prompt("Please enter the Number:",""));
  sum1=sum1+num;
}
for(var i=1;i<=4;i++)
{
  var num=parseInt(prompt("Please enter the Number:",""));
  sum2=sum2+num;
}
  if(sum1==sum2)
  {
    alert("yes");
  }
  else {
    alert("no");
  }
break;

//problem18
case 18:
var a=parseInt(prompt("Please enter the Number:",""));
var c=a;
var b;
var counter=0;
while(c!=0)
{
  b=c%10;
  if(b==5)
  {
    counter++;
  }
  c=parseInt(c/10);
}
alert(counter);
break;

//problem19
case 19:
var c=parseInt(prompt("Please enter the Number:",""));
var sum=0;
var b;
while(c!=0)
{
  b=c%10;
  sum=sum+b;
  c=parseInt(c/10);
}
alert(sum);
break;

//problem20
case 20:
var i=20;
{
for(i=20;i>0;i--)
  if(i<0)
  {
    alert("BOOM!");
  }
  else{
    alert(i);
  }
}
break;

//problem21
case 21:
var sum=0;
for(var i=10;i<=30;i++)
{
  sum=sum+i;
}
alert(sum);
break;

//problem22
case 22:

var a=parseInt(prompt("Please enter the Number:",""));
while(a!=0)
{
  var rem=a%2;
  a=Math.floor(a/2);
  document.write(rem+" ");
}
alert(rem);
break;

//problem23
case 23:
var result= '\n';
for(var i=1;i<=11;i++)
{
  for(var j=1;j<11;j++)
  {
    result +=(i*j)+' ';
  }
  result +='\n';
}
  alert(result);
break;

//problem24
case 24:
var base=parseInt(prompt("Please enter a base:",""));
  var power=parseInt(prompt("Please enter a power:",""));
  var ans=pow(base,power);
  alert(ans);
  function pow(a,b)
{
  var answer=a;
  var increment=b;
  var i;
  var j;
  if(b==0)
  {
    answer=1;
  }
  for(i=1;i<b;i++)
  {
    for(j=1;j<a;j++)
    {
      answer=answer+increment;
    }
    increment=answer;
  }
  return answer;
}
break;

//problem25
case 25:
var a=parseInt(prompt("Please enter  Number1:",""));
  var b=parseInt(prompt("Please enter Number2:",""));
  var d=1;
  var c;
  var p=0;
  while(p==0)
  {
    if(d%a==0 && d%b==0)
    {
      c=d;
      p=1;
    }
    d++;
  }
  alert(c);
break;

//problem26
case 26:
var a=parseInt(prompt("Please enter  Number1:",""));
var b=parseInt(prompt("Please enter Number2:",""));
var d=1;
var c;
while(d<=a && d<=b)
{
if(a%d==0 && b%d==0)
  {
    c=d;
  }
  d++;
}
alert(c);
break;

//problem27
case 27:
var a=  parseInt(prompt("Please enter the Number:",""));
   var ans=prime(a);
   alert(num);
   function prime(n)
    {
   var num=0;
   var prime="true";
   for(var j=2;i<=n;i++)
   {
   for(var j=2;j<i;j++)
   {
     if(i%j==0)
     {
       prime="false";
     }
   }
     if(prime=="true")
   {
     num=num+i;
   }
   }
   return num;
   }
break;

//problem28
case 28:
var firstpart=["Abdel","Sam","Radhey","Zhe","Shiv","Parth","Clar","Fra","Bil"];
var secondpart=["Iah","Hna","Rial","Ek","Jura","Erst","Bert","Lee","James"];
var surname=["Hasman","Zhang","Kamel","Shah","Patel","Barot","KIm","Clark","Sun","Trump"];
var len=0;
var i=0;
var name="";
len=firstpart.length;
i=getRandom(len);
len=secondpart.length;
i=getRandom(len);
len=surname.length;
i=getRandom(len);
  name=name+" "+surname[i];
  if(surname[i]=="Trump")
  {
    alert("President "+name);
  }
  else {
    alert(name);
  }
  function getRandom(num)
  {
    return Math.floor(Math.random()*num)
  }
break;

//problem29
case 29:
var f,s,t;
  var x=[f,s,t];
  f=Math.floor(Math.random()*9);
  s=Math.floor(Math.random()*9);
  t=Math.floor(Math.random()*9);
  var a=parseInt(prompt("Please enter first Number:",""));
  var b=parseInt(prompt("Please enter second Number:",""));
  var c=parseInt(prompt("Please enter third Number:",""));
  alert("correct answer is"+f+s+t+"\n"+"given answer is"+a+b+c);
  if(a==f)
  {
    if(b==s)
    {
      if(c==t)
      {
        alert("BINGO!");
     }
    }
  }
  break;

//problem30
case 30:
var b=parseInt(prompt("Please enter first Number:",""));
var c=parseInt(prompt("Please enter second Number:",""));
var d=parseInt(prompt("Please enter third Number:",""));
 var e=(b*b - 4*d*c);
 var root;
 if(e>0){
   root="It has 2 distinct roots";
 }
 else if(e>=0)
 {
   root="Its roots are identical";
 }
 else {
   root="It has no real root";
 }
 alert(root);
 break;

//problem31
case 31:
var a;
while(a!=0){
  var a=parseInt(prompt("Please enter the Number:",""));
  if(a<0){
    alert("The Number is Negative");
  }
  else {
    alert("The Number is Positive");
  }
}
break;

//problem32
case 32:
var b=0;
var c=0;
var a=parseInt(prompt("Enter number",""));
var answer;
if(a<0)
{
answer="Negative";

}
else if(a>0)
{
  answer="Positive";
  alert(answer);
}
else {
  answer="Negative";
  alert(answer);
}
break;

//problem33
case 33:
var b=0;
  var a=new Array(10);
  for(i=0;i<10;i++)
  {
    a[i]=parseInt(prompt("Please enter 10 Number:",""));
  }
  for(j=0;j<10;j++)
  {
    if(a[j]>0)
    {
      b++;
    }
  }
  alert(b);
break;

//problem34
case 34:
var a=parseInt(prompt("Please enter the first Number:",""));
var b=parseInt(prompt("Please enter the second Number:",""));
var c=parseInt(prompt("Please enter the third Number:",""));
var s=((a+b+c)/2);
var p=(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
alert("Area="+p);
break;

//problem35
case 35:
var answer;
  var a=parseInt(prompt("Please enter your marks:",""));
  switch (true) {
    case (a>89):
      answer="A+";
      break;
      case (a>79):
        answer="A";
        break;
        case (a>74):
          answer="B+";
          break;
          case (a>69):
            answer="B";
            break;
            case (a>64):
              answer="C+";
              break;
              case (a>59):
                answer="C";
                break;
                case (a>54):
                  answer="D+";
                  break;
                  case (a>49):
                    answer="D";
                    break;
                    case (a>44):
                      answer="E";
                      break;

    default:
    answer="Fail";
    }
    alert(answer);
break;

//problem36
case 36:
var i,j,k,l;
var answer=" ";
for(i=1;i<=5;i++)
{
  for(j=5;j>i;j--)
  {
    answer=answer+" ";
  }
    for(k=i;k>=1;k--)
    {
      answer=answer+k;
    }
      for(l=2;l<=i;l++)
      {
        answer=answer+l;
      }
    answer=answer+"\n";
}
alert(answer);
break;

//problem37
case 37:
var i,j,k;
var answer=" ";
for(i=1;i<=5;i++)
{
  for(j=5;j>i;j--)
  {
    answer=answer+" ";
  }
  for(k=1;k<=i;k++)
  {
    answer=answer+"*";
  }
  answer=answer+"\n";
}
alert(answer);
break;

//problem38
case 38:
var i,j,k;
  var rows=parseInt(prompt("Enter Number of Rows:",""));
  var answer="";
  for(i=rows;i>=1;i--)
  {
    for(j=1;j<=rows-i;j++)
    {
      answer=answer+"";
    }
      for(k=1;k<=i;k++)
      {
      answer=answer+j;
      answer=answer+"";
      }
      answer=answer+"\n";
    }
    alert(answer);

break;

//problem39
case 39:
var a=parseInt(prompt("Enter Number of Rows:",""));
var answer="";
for(var row=1;row<=a;row++)
{
  for(var col=1;col<=a;col++)
  {
    answer=answer+"# ";
  }
    answer=answer+"\n";
    }
  alert(answer);
break;


//problem40
case 40:
var num2,r=1,pro=1;
var num1=parseInt(prompt("Enter a number: ",""));
num2=num1;
while(num1!=0)
{
  r=num1% 10;
  pro=pro*r;
  num1=parseInt(num1/10);
}
alert("Number is"+num2+"\n Product is "+pro);
break;
}
}









/* for teaching purposes, we used some pure JS and some jQuery codes in the following 3 functions.
   compare them, and learn both */
function checkUncheck1(){
      if ($("#flowchart").css("display")==="none") {
         $("#flowchart").css("display","inline");
      }
      else {
         $("#flowchart").css("display","none");
      }
}

function checkUncheck2(){
      if (document.getElementById("javaScript").style.display==="none") {
         document.getElementById("javaScript").style.display="inline";
      }
      else {
         document.getElementById("javaScript").style.display="none";
      }
}
function checkUncheck3(){
        if ($("#anotherSolution").css("display")==="none") {
            $("#anotherSolution").css("display","inline");
        }
        else {
            $("anotherSolution").css("display","none");
        }
}

/* for teaching purposes, we used some pure JS and some jQuery codes in the following 2 functions.
   compare them, and learn both */
function zoomIn() {
        $("#flowchart").css("width","200%");
}
function zoomOut() {
        document.getElementById("flowchart").style.width="100%";
}
