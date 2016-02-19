require "sinatra"

get "/" do
	erb :index
end

get "/skin" do
	erb :skin
end

get "/hair" do 
	erb :hair
end

get "/nails" do
	erb :nails
end
