require "sinatra"

get "/" do
	erb :index
end

get "/what" do
	erb :what
end

get "/trans" do 
	erb :trans
end

get "/meet" do
	erb :meet
end
