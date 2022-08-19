def is_prime(n):
    if n is 1:
        return False
    for i in range(2, n):
        if n % i is 0:
            return False
    return True
