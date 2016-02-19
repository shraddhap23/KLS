require "sinatra"

get "/" do
	erb :index
end

get "/meet" do
	erb :meet
end

get "/trans" do 
	erb :trans
end

get "/what" do
	erb :what
end
