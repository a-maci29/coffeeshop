let buttons = document.querySelectorAll('.drink')

let allOrders = {}
let name = document.querySelector('#customerName')
buttons.forEach(e => e.addEventListener('click', order))
let total = 0
function order(e){ 
  let option = e.target.parentNode.id//
  let drink = e.target.children[0].innerText//
  let price = e.target.value
  allOrders[option] = drink//

 let node = document.createElement("LI");
 let textnode = document.createTextNode(drink + price );
  node.appendChild(textnode);
  document.querySelector("ul").appendChild(node);

total +=  Number(e.target.value)

document.querySelector(".total").innerText = `Total: ${total}`
}




document.querySelector('#submit').addEventListener('click', function(){
       allOrders.name = name.value
        fetch('order', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(allOrders)
        }).then(function (response) {
          window.location.reload()
        })
      });
 