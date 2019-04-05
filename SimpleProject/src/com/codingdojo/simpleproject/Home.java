package com.codingdojo.simpleproject;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Home
 */
@WebServlet("/Home")
public class Home extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Home() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
				
		String userName = request.getParameter("name");
		String language = request.getParameter("language");
		String hometown = request.getParameter("hometown");
		
        response.setContentType("text/html");
        
        if (userName == null) {
			userName = "Unkown";
		}
        if (language == null) {
			language = "Unkown";
		}
		if (hometown == null) {
			hometown = "Unkown";
		}
		
        PrintWriter out = response.getWriter();
        out.write("<h1>Welcome, " + userName + "</h1>");
        out.write("<h2>Your favorite language is: " + language + "</h2>");
        out.write("<h2>Your Hometown is: " + hometown + "</h2>");
		
	}
	
	//http://localhost:8080/SimpleProject/Home?name=Mai&language=Python&hometown=San%20Leandro
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
