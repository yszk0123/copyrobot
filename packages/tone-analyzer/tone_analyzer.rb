#会話文章をファイルから読み込む
talk = ''
File.open('./only_talk.txt', 'r:utf-8') do |file|
  while line = file.gets
    talk = talk + line
  end
end

# Shellコマンドのデータを取り出す
cmd = ''
file_name = "test.sh"
File.open(file_name, 'r:utf-8') do |file|
  while line = file.gets
    cmd = line.gsub(/aaaaaaaa/, talk)
  end
end

# Shellコマンドをファイルへ保存する
file_name = "test2.sh"
File.open(file_name, 'w') {|file|
  file.write cmd
}

# $stdout に出力するコード
begin
  exec('sh test2.sh')
rescue
  puts "error"
end
