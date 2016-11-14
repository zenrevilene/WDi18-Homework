require 'rainbow'
require 'pry' #Gives us access to binding.pry (like debugger in JS)

puts Rainbow("Welcome to our calculator").magenta
puts " "
total = 0.000

def menu
  puts Rainbow("Please choose the type of operations below: ").aliceblue
  puts Rainbow("(a) - addition").yellow
  puts Rainbow("(s) - subtraction").yellow
  puts Rainbow("(m) - multiplication").yellow
  puts Rainbow("(d) - division").yellow
  puts Rainbow("(q) - quit").yellow
  print "Enter your choice: "
  gets().chomp() #Implicit return
end


def add_new
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number?"
  second_num = gets.to_f
  total = first_num + second_num
  puts "The total is #{total}"
  puts " "

  puts "Do you want to continue with the 'Addition' operations? Y/N"
  continue = gets().chomp()

  until continue == "N"
    print "Please enter the next number"
    next_num = gets.to_f
    total += next_num
    puts "The total is #{total}"
    puts " "
    puts "Do you want to continue with this addition operation? Y/N"
    continue = gets().chomp()
    puts Rainbow(total).silver
  end
  return total
end

def subtraction_new
  puts " "
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number?"
  second_num = gets.to_f

  total = first_num - second_num
  puts "The total is #{total}"
  puts " "

  puts "Do you want to continue with substraction operation? Y/N"
  continue = gets().chomp()

  until continue == "N"
    print "Please enter the next number"
    next_num = gets.to_f
    total = total - next_num
    puts "The total is #{total}"
    puts " "
    puts "Do you want to continue with substraction operation? Y/N"
    continue = gets().chomp()
  end
  return total
end


def multiplication_new
  puts " "
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number?"
  second_num = gets.to_f
  total = first_num * second_num

  puts "The total is #{total}"
  puts " "

  puts "Do you want to continue with multiplication? Y/N"
  continue = gets().chomp()

  until continue == "N"
    print "Please enter the next number"
    next_num = gets.to_f
    total = total * next_num
    puts "Do you want to continue with multiplication? Y/N"
    continue = gets().chomp()
  end
  return total
end


def division_new
  puts " "
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number?"
  second_num = gets.to_f
  total = first_num / second_num

  puts "The total is #{total}"
  puts " "

  puts "Do you want to continue with division operation? Y/N"
  continue = gets().chomp()

  until continue == "N"
    print "Please enter the next number"
    next_num = gets.to_f
    total = total / next_num
    puts "Do you want to continue with division operation? Y/N"
    continue = gets().chomp()
  end
  return total
end

#if user continue with the current total that they have

def add
  print "Please enter number to be added to the total? "
  # binding.pry
  first_num = gets.to_f
  total = first_num + $total
  puts "The total is #{total}"
  puts " "

  puts "Do you want to continue? Y/N"
  continue = gets().chomp()
  until continue == "N"
    print "Please enter the next number"
    next_num = gets.to_f
    total = total + next_num
    puts "Do you want to continue? Y/N"
    continue = gets().chomp()
  end
  return total
end

def subtraction
  print "Please enter number to be subtracted from the current total "
  first_num = gets.to_f
  total = total - first_num
  puts "The total is #{total}"
  puts " "

  puts "Do you want to continue? Y/N"
  continue = gets().chomp()
  until continue == "N"
    print "Please enter the next number"
    next_num = gets.to_f
    total = total - next_num
    puts "Do you want to continue? Y/N"
    continue = gets().chomp()
  end
  return total
end


def multiplication
  print "Please enter the number to be multiplied with the current total"
  first_num = gets.to_f
  total = total * first_num
  puts "The total is #{total}"
  puts " "

  puts "Do you want to continue? Y/N"
  continue = gets().chomp()
  until continue == "N"
    print "Please enter the next number"
    next_num = gets.to_f
    total = total * next_num
    puts "Do you want to continue? Y/N"
    continue = gets().chomp()
  end
  return total
end

def division
  print "What is the value to be divided by the current value"
  first_num = gets.to_f
  total = total / first_num
  puts "The total is #{total}"
  puts " "

  puts "Do you want to continue? Y/N"
  continue = gets().chomp()
  until continue == "N"
    print "Please enter the next number"
    next_num = gets.to_f
    total = total / next_num
    puts "Do you want to continue? Y/N"
    continue = gets().chomp()
  end
  return total
end


user_choice = menu() #whatever is returned from the menu will be saved here
# p user_choice

#Keep displaying the menu until the user_choice variable stores the string "q"

until user_choice == "q"
  case user_choice
  when "a" then total = add_new()
  when "s" then total = subtraction_new()
  when "d" then total = division_new()
  when "m" then total = multiplication_new()
  else
    puts "That is not a valid option"
  end

  puts Rainbow(total).red
  puts "Continue with other operations with current total? Y/N"
  continue = gets().chomp()

  if continue == "Y"
    $total += total
    user_choice = menu()
    case user_choice
      when "a" then add()
      when "s" then subtraction()
      when "d" then division()
      when "m" then multiplication()
    else
      puts "That is not a valid option"
    end
  elsif continue == "N"
    total = 0.0
    user_choice = menu()
    case user_choice
    when "a" then add_new()
    when "s" then subtraction_new()
    when "d" then division_new()
    when "m" then multiplication_new()
    else
      puts "That is not a valid option"
    end
  end
  # user_choice = menu()
end

puts " "
puts "Thanks for using our calculator"
