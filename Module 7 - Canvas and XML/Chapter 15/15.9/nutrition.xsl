<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>
  <xsl:template match="/product">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <title>
          <xsl:value-of select="productName"/> — Nutrition Facts
        </title>
      </head>

      <body>
        <h1><xsl:value-of select="productName"/></h1>
        <table>
          <tr><td>Serving Size</td><td><xsl:value-of select="nutritionFacts/servingSize"/></td></tr>
          <tr><th>Nutrient</th><th>Amount</th></tr>
          <tr><td>Calories</td><td><xsl:value-of select="nutritionFacts/calories"/></td></tr>
          <tr><td>Calories from Fat</td><td><xsl:value-of select="nutritionFacts/fatCalories"/></td></tr>
          <tr><td>Total Fat</td><td><xsl:value-of select="nutritionFacts/fat"/></td></tr>
          <tr><td>Saturated Fat</td><td><xsl:value-of select="nutritionFacts/saturatedFat"/></td></tr>
          <tr><td>Cholesterol</td><td><xsl:value-of select="nutritionFacts/cholesterol"/></td></tr>
          <tr><td>Sodium</td><td><xsl:value-of select="nutritionFacts/sodium"/></td></tr>
          <tr><td>Total Carbohydrates</td><td><xsl:value-of select="nutritionFacts/carbs"/></td></tr>
          <tr><td>Dietary Fiber</td><td><xsl:value-of select="nutritionFacts/fiber"/></td></tr>
          <tr><td>Sugars</td><td><xsl:value-of select="nutritionFacts/sugar"/></td></tr>
          <tr><td>Protein</td><td><xsl:value-of select="nutritionFacts/protein"/></td></tr>
        </table>
        </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
