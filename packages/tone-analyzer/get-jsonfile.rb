require 'json'

json_file_path = 'talk.json'

#読み込んで
json_data = open(json_file_path) do |io|
  JSON.load(io)
end

# 会話のみのデータを取り出す
talk = []
json_data.each do |dic|
  dic.each {|key, value|
    if key == "message"
      talk.push(value)
    end
  }
end

# ファイルへ保存する
file_name = "only_talk.txt"
File.open(file_name, 'w') {|file|
  talk.each do |sentence|
     file.write sentence+" "
  end
}
