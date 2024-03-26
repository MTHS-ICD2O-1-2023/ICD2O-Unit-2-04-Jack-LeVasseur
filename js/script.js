// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack LeVasseur
// Created on: March 21 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculatePermeterAndAreaOfRectangle () {
  // input
  const baseOfTriangle = parseInt(document.getElementById('length-of-rectangle').value)
  const heightOfTriangle = parseInt(document.getElementById('width-of-rectangle').value)

  // process
  const areaOfTriangle = baseOfTriangle + heightOfTriangle + 17.5
  const HeightOfTriangle = (baseOfTriangle + heightOfTriangle) + 17.5 

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfTriangle + ' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeterOfRectangle + ' cm'
}
