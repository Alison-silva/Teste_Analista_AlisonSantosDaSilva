SELECT c.cliente
--, c.email
FROM d_clientes c
JOIN d_pedidos p ON c.id_cliente = p.id_cliente
WHERE p.status = 'Concluida'
GROUP BY c.id_cliente, c.cliente
--, c.email
HAVING MAX(p.data_pedido) < CURRENT_DATE - INTERVAL '90 days';

-- SQL feito no postgreSQL
-- Nome e o E-mail dos clientes que não realizaram nenhum pedido nos últimos 90 dias
-- Mas que possuem pelo menos um pedido 'Concluído' em todo o seu histórico.
-- A base de dados do excel não tinha email
