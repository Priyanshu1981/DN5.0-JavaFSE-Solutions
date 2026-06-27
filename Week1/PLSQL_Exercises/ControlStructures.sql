//Scenario 1: Age Discount


BEGIN
    FOR cust_rec IN (SELECT customer_id FROM Customers WHERE age > 60) 
    LOOP
        UPDATE Loans 
        SET interest_rate = interest_rate - 1.0 
        WHERE customer_id = cust_rec.customer_id;
    END LOOP;
    COMMIT;
END;





//Scenario 2: VIP Status


BEGIN
    FOR cust_rec IN (SELECT customer_id FROM Customers WHERE balance > 10000) 
    LOOP
        UPDATE Customers 
        SET is_vip = 'TRUE' 
        WHERE customer_id = cust_rec.customer_id;
    END LOOP;
    COMMIT;
END;





//Scenario 3: Loan Reminders



SET SERVEROUTPUT ON;

BEGIN
    FOR loan_rec IN (
        SELECT c.name, l.due_date 
        FROM Loans l
        JOIN Customers c ON l.customer_id = c.customer_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30
    ) 
    LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: ' || loan_rec.name || ', your loan is due on ' || TO_CHAR(loan_rec.due_date, 'YYYY-MM-DD'));
    END LOOP;
END;
