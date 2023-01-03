cat input.txt| tr '\n' 'x' | sed 's/xx/\n/g' | sed 's/x/ /g' | awk '{c=0;for(i=1;i<=NF;++i){c+=$i}; print c}' | sort -rn | head -n 3 | awk '{sum+=$0;} END{print sum;}'
