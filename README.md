# Tailwind CSS Gradient Background Issue

This repository demonstrates a bug I encountered when trying to use Tailwind CSS's gradient backgrounds. The gradient does not appear correctly; instead, a solid color is displayed. This README describes the problem and its solution.

## Bug Description

When applying a linear gradient using Tailwind's `bg-gradient-to-r` utility class, the gradient is not rendered correctly in the browser. Instead of a smooth transition between two colors, the background shows only one solid color. 

## Solution

The solution is to ensure that you have properly imported and configured Tailwind CSS in your project. Verify that Tailwind's configuration file (`tailwind.config.js`) correctly points to your CSS file and includes the necessary content.

If you use a framework like NextJS, make sure you've configured Tailwind as per their documentation. Double check that you have enabled the gradient plugin in your `tailwind.config.js` file (if required) and that you're using the correct class names.