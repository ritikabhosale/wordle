node ./resources/setUp.js

gameStatus=1

while [[ $gameStatus == 1 ]]
do
    read -p "Enter your 5 letter guess: " guess
    node src/main.js $guess
    
    if [[ $? == 1 ]]; then gameStatus=0; fi
    open index.html
done

rm -r resources/data.json
