<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>Checkboard Assignment</title>
	
	<style>
	td {
		height: 50px;
		width: 50px;
		}
		
	.color1{
		background-color: #FF0000;
	}
	
	.color2{
		background-color: #000000;
	}
	
	</style>
</head>
<body>

<!-- getting the value for the name parameter -->
    <% int width = Integer.parseInt(request.getParameter("width")); %>
    <% int height = Integer.parseInt(request.getParameter("height")); %>
    <%   %>
    
    <h2>Checkerboard <%= width %> X <%= height %></h2>
    
    <p><p>
    
    
  	<table>
      	<% for(int i = 0; i < height ; i++) { %> <!-- height -->
      		<tr>
      			<% for(int j = 0; j < width; j++) { %> <!-- width -->
      			<td class="color<%= (i+j)%2 +1 %>"></td>
      		
      			<% } %>
	      	</tr>
    	<% } %>
    
    </table>
    
    
    
     
    

</body>
</html>