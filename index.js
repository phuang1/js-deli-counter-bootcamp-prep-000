var katzDeliLine = []

function takeANumber(katzDeliLine,name){

  katzDeliLine.push(name)
  
  return (`Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`)
}

function nowServing (katzDeliLine){
  if (katzDeliLine.length>0){
  return (`Currently serving ${katzDeliLine.splice(0,1)}.`)}

  else if (katzDeliLine.length===0){
    return ('There is nobody waiting to be served!')}
  }


function currentLine(katzDeliLine){
  let i=0; i<katzDeliLine.length 
  
  return (`The line is currently: 
  '${katzDeliLine.indexOf}+1'. [i]`)
  
  i++
  
  if (katzDeliLine.length=0){
    return ('The line is currently empty.')
  }
}

// iterate through katzDeliLine[i]

1. katzDeliLine[0]
2. katzDeliLine[1]