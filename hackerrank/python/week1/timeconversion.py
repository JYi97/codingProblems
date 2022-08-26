def timeConversion(s):
    # Write your code here
    if s[8] == "A":
        if s[0:2] == "12":
            return f'00{s[2:8]}'
        return s[0:8]
    if s[8] == "P":
        if s[0:2] == "12":
            return s[0:8]
        return f'{int(s[0:2]) + 12}' + s[2:8]
